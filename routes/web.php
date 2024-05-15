<?php

use App\Http\Controllers\Auth\CredentialController;
use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('base');
});

Route::get('/register', [CredentialController::class, 'registerForm'])->name('register');
Route::post('/register', [CredentialController::class, 'register']);

Route::get('/login', [CredentialController::class, 'loginForm'])->name('login');

Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle'])->name('googleAuth');
Route::get('/auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
