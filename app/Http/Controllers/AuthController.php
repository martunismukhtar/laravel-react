<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use JWTAuth;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;
use App\Notifications\ResetPassword;
use Illuminate\Support\Str;

class AuthController extends Controller {
    
    public function __construct() {
        
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function resetPassword(Request $request) {
        
        $validatedData = $this->validate($request, [
            'password' => [
                'required',
                'confirmed',
                'min:8',
            ]
        ]);


        $userID  = auth()->user()->id;
        $user = User::where('id', $userID)->first();

        if (!$user) {
            return response()->json(['status'=>'error', 'message' => 'User not found']);
        }
            
        $user->password = Hash::make($validatedData['password']);
        $user->save();

        if ($user) {
            return response()->json(['status'=>'success', 'message' => 'reset password success', 'data'=>$user]);
            
        }

    }

    
    public function resend(Request $request) {
        $validatedData = $this->validate($request, [
            'email' => 'required|email'
        ]);

        $user = User::where('email', $validatedData['email'])->first();

        if (empty($user)) {
//            return response()->not_found();
            return response()->json(['status'=>'error', 'message' => 'User not found']);
        }

        $user->notify(
            new ResetPassword(Str::random(40))
        );

        return response()->json(['status'=>'success', 'message' => 'Successfully send email, please open your email to reset password']);
        
    }
    
    public function verify(Request $request, $id) {
        
        $user = User::findOrFail($id);
        if ($user->hasVerifiedEmail()) {
            
            return response()->json(['status'=>'error', 'message' => 'verification error'], 410);
            
        }
        else if ($user->markEmailAsVerified()) {
            event(new Verified($user));
            
            return response()->json(['status'=>'success', 'message' => 'Successfully verification', 'data'=>$user]);
            
        } 
    
        return response()->json(['status'=>'error', 'message' => 'verification.error'], 422);
    
    }
    
    public function login() {
        
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
    
    public function register (Request $request) {
        
        $validatedData = $request->validate ([
            'email' => [
                'required',
                'email',
                'unique:users',
            ],
            'username' => [
                'required',
                'unique:users',
            ],
            'password' => [
                'required',
                'confirmed',
                'min:8',
            ],
            'name' => 'required|string',
            'phone_number' => 'required|string',
            'address' => 'required|string',
        ]);
        
        $userData = [
            'email' => $request->email,
            'username' => $request->username,
            'phone_number' => $request->phone_number,
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'address' => $request->address,
            'last_login_at' => date('Y-m-d H:i:s')
        ];

        $user = User::create($userData);
        $token = JWTAuth::fromUser($user);
        $user->sendEmailVerificationNotification();
        
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {
        
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token) {
        
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    
}
