<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Auth::routes(['verify' => true]);
//Route::post('login', 'UserController@login');

Route::get('/verify/{id}', [AuthController::class, 'verify'])->name('verification.verify');
Route::post('/resend', [AuthController::class, 'resend'])->middleware('auth');
Route::post('/reset-password', [AuthController::class, 'resetPassword'])->middleware('auth');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/company', [CompanyController::class, 'index']);
Route::post('/mycompany', [CompanyController::class, 'mycompany'])->middleware('auth');

Route::post('/addfavorite', [CompanyController::class, 'addfavorite'])->middleware('auth');
Route::post('/removefavorite', [CompanyController::class, 'removefavorite'])->middleware('auth');