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

Route::prefix('auth')->group(function() {
    Route::get('/register', [CredentialController::class, 'registerForm'])->name('register');
    Route::post('/register', [CredentialController::class, 'register']);

    Route::get('/login', [CredentialController::class, 'loginForm'])->name('login');
    Route::post('/login', [CredentialController::class, 'login']);

    Route::get('/google', [GoogleController::class, 'redirectToGoogle'])->name('googleAuth');
    Route::get('/google/callback', [GoogleController::class, 'handleGoogleCallback']);
});


