<?php

namespace App\Http\Controllers;

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
        $search = $request->search;
        $userid = $request->userid;
        
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
        $userid = $request->userid;
        
        $company = Company::find($request->id);

        $hasPivot = Company::whereHas('user', function ($q) use ($userid) {
            $q->where('company_user.user_id', $userid);
        })
        ->exists();
        
        if($hasPivot) {
            $company->user()->attach($request->userid);
        }
        

        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
        
    }
    
    function removefavorite(Request $request) {
        $company = Company::find($request->id);

        $company->user()->detach($request->userid);
        
        return response()->json(['status'=>'success', 'message' => 'success', 'data'=>$company]);
    }
    
}
