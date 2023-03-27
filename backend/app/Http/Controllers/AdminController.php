<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function login (Request $request){
        // check if both fields are present
        if(!$request['email'] && !$request['password']) return response()->json(['msg' => 'Email & Password are required.']);

        // check if user is exits with this email id or not



        // return response
        return response()->json($request);
    }



    public function createNewUser (Request $request){
        // check if both fields are present
        if(!$request['email'] && !$request['password']) return response()->json(['msg' => 'Email & Password are required.']);

        // check if user is exits with this email id or not



        // return response
        return response()->json($request);
    }





}
