<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
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
        $validated = $request->validated();
        $user = User::create($validated);

        Auth::login($user);

        return redirect()->route('dashboard');

    }

    public function login() {

    }
}
