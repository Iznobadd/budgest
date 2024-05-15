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

class CredentialController extends Controller
{
    public function registerForm(): View {
        return view('auth.register');
    }

    public function loginForm(): View {
        return view('auth.login');
    }

    public function register(RegisterRequest $request): RedirectResponse
    {
        $credentials = $request->validated();
        $user = User::create($credentials);

        Auth::login($user);

        return redirect()->route('dashboard.home');

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
        ]);
    }
}
