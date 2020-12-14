<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class VerificationController extends Controller
{
    use VerifiesEmails;

    public function show() {
        auth()->user()->sendEmailVerificationNotification();
    }

    public function verify(Request $request, $id) {
        
        $user = User::findOrFail($id);
        if ($user->hasVerifiedEmail()) {
            return response()->error(__('verification.error.resend'), 410);
        }
        else if ($user->markEmailAsVerified()) {
            event(new Verified($user));
            return response()->success(__('verification.success.verify'));
        } 
    
        return response()->error(__('verification.error.verify'), 422);
    
    
    //        return redirect($this->redirectPath());
    }

    public function resend(Request $request)
    {
        $validatedData = $this->validate($request, ['user_id' => 'required|integer']);

        $user = User::findOrFail($validatedData['user_id']);

        if ($user->hasVerifiedEmail()) {
            return response()->error(__('verification.error.resend'), 422);
        }

        $user->sendEmailVerificationNotification();

        return response()->success(__('verification.success.resend'), 200);
    }

    // public function __construct()
    // {
    //     $this->middleware('auth');
    //     $this->middleware('signed')->only('verify');
    //     $this->middleware('throttle:6,1')->only('verify', 'resend');
    // }

    public function verifyImmapEmail(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if($user->profile->verified_immaper == 1) {
            return response()->error(__('verification.error.alreadyVerifiedImmapEmail'), 401);
        }

        if ($user->profile->is_immaper == 1 && $user->profile->verified_immaper == 0) {
            $user->profile->fill(['verified_immaper' => 1])->save();
            $user->fill(['immap_email' => $user->profile->immap_email])->save();

            return response()->success(__('verification.success.verifyImmapEmail'));
        }


        return response()->error(__('verification.error.verifyImmapEmail'), 422);
    }

    public function resendImmapEmail(Request $request)
    {
        $validatedData = $this->validate($request, ['user_id' => 'required|integer']);
        $profile = User::findOrFail($validatedData['user_id'])->profile;

        if(empty($profile)) {
            return response()->error(__('verification.error.resendImmapEmail'), 422);
        }

        if($profile->verified_immaper == 1) {
            return response()->error(__('verification.error.alreadyVerifiedImmapEmail'), 422);
        }

        if ($profile->is_immaper == 1 && $profile->verified_immaper == 0) {
            Mail::to($profile->immap_email)->send(new ImmapVerification($profile->user->full_name, $profile->user->id));

            return response()->success(__('verification.success.resendImmapEmail'), 200);
        }

        return response()->success(__('verification.error.resendImmapEmail'), 422);
    }

}
