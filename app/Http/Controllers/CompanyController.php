<?php

namespace App\Http\Controllers;

//use Illuminate\Support\Facades\Auth;
//use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Validator;

//use Illuminate\Support\Facades\Hash;
//use App\Models\User;
//use JWTAuth;
//use Illuminate\Foundation\Auth\VerifiesEmails;
//use Illuminate\Auth\Events\Verified;
//
//use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
//use Illuminate\Foundation\Auth\ResetsPasswords;
//use Illuminate\Support\Facades\Password;
//use App\Notifications\ResetPassword;
//use Illuminate\Support\Str;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller {
    
    
    function index(Request $request){
        
        $search = $request->search;
        
        if(!empty($search)) {
            $company = Company::with('user')->where('name', 'LIKE', "%{$search}%")->get();
        } else {
            $company = Company::with('user')->get();
        }
        
        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
    }
    
    
    function mycompany (Request $request) {
        
        $validatedData = $request->validate ([
            'userid' => 'required|integer',
            'search' => 'nullable|string'
        ]);
        
        $search = $request->search;
        $userid = $request->userid;
        
        if(empty($userid)) {
            return response()->json(['status'=>'error', 'message' => 'error']);
        }
        
        if(!empty($search)) {
            
            
            $company = Company::whereHas('user', function($q) use($userid) {
                $q->where('company_user.user_id', $userid);
            })->where('name', 'LIKE', "%{$search}%")
            ->get();
            
        } else {
            
            $company = Company::whereHas('user', function($q) use($userid) {
                $q->where('company_user.user_id', $userid);
            })
            ->get();
            
        }
        
        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
    }
    
    function show() {
        
    }
    
    function store() {
        
    }
    
    function addfavorite(Request $request) {
        
        $validatedData = $request->validate ([
            'userid' => 'required|integer',
            'id' => 'required|integer'
        ]);
        
        $userid = $request->userid;
        $compoanyid = $request->id;
        
        $company = Company::find($request->id);

        $hasPivot = Company::whereHas('user', function ($q) use ($userid, $compoanyid) {
            $q->where('company_user.user_id', $userid)->where('company_user.company_id', $compoanyid);
        })
        ->exists();
        
        if(!$hasPivot) {
            $company->user()->attach($request->userid);
        }
        

        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
        
    }
    
    function removefavorite(Request $request) {
        
        $validatedData = $request->validate ([
            'id' => 'required|integer'
        ]);
        
        $company = Company::find($request->id);

        $company->user()->detach($request->userid);
        
        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
    }
    
}
