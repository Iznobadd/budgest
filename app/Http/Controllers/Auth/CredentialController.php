<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class CredentialController extends Controller
{
    public function registerForm() {
        return Inertia::render('Auth/Register', [
            'googleAuthUrl' => route('googleAuth'),
            'loginUrl' => route('login')
        ]);
    }

    public function loginForm() {
        return Inertia::render('Auth/Login', [
            'googleAuthUrl' => route('googleAuth'),
            'registerUrl' => route('register')
        ]);
    }

    public function register(RegisterRequest $request): RedirectResponse
    {
        $credentials = $request->validated();
        $user = User::create($credentials);

        Auth::login($user);

        return redirect()->route('dashboard.overview');

    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.'
        ])->onlyInput('email');
    }
}
