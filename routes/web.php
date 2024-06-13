<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\Auth\CredentialController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransactionController;

Route::middleware('guest')->group(function() {
    Route::prefix('auth')->group(function() {
        Route::get('/register', [CredentialController::class, 'registerForm'])->name('register');
        Route::post('/register', [CredentialController::class, 'register']);

        Route::get('/login', [CredentialController::class, 'loginForm'])->name('login');
        Route::post('/login', [CredentialController::class, 'login']);

        Route::get('/google', [GoogleController::class, 'redirectToGoogle'])->name('googleAuth');
        Route::get('/google/callback', [GoogleController::class, 'handleGoogleCallback']);
    });
});

Route::middleware(['auth'])->group(function() {
    Route::prefix('dashboard')->name("dashboard.")->group(function () {
        Route::get('/', [HomeController::class, 'overview'])->name('overview');

        Route::prefix('accounts')->name('accounts.')->group(function () {
            Route::get('/add', [AccountController::class, 'addAccount'])->name('add');
            Route::post('/add', [AccountController::class,'storeAccount'])->name('store');
        });

        Route::prefix('categories')->name('categories.')->group(function () {
            Route::get('/add', [CategoryController::class, 'addCategory'])->name('add');
            Route::post('/add', [CategoryController::class,'storeCategory'])->name('store');
        });

        Route::prefix('transactions')->name('transactions.')->group(function () {
            Route::get('/add', [TransactionController::class, 'addTransaction'])->name('add');
            Route::post('/add', [TransactionController::class,'storeTransaction'])->name('store');
        });

    });
});



