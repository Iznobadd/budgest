<?php

use App\Http\Controllers\Auth\CredentialController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Dashboard\BudgetController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\OverviewController;
use App\Http\Controllers\TransactionController;

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

Route::get('auth/create-budget', [BudgetController::class, 'createForm'])->middleware('auth')->name('auth.create_budget');
Route::post('auth/create-budget', [BudgetController::class, 'create'])->middleware('auth');

Route::middleware(['auth', 'check.budget'])->group(function() {
    Route::prefix('dashboard')->name("dashboard.")->group(function () {
        Route::get('/', [HomeController::class, 'overview'])->name('overview');

        Route::prefix('transactions')->name('transactions.')->group(function () {
            Route::get('/add', [TransactionController::class, 'addTransaction'])->name('add');
            Route::post('/add', [TransactionController::class,'storeTransaction']);
        });

    });
});



