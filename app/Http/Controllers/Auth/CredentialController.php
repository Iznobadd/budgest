<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class CredentialController extends Controller
{
    public function registerForm(): View {
        return view('auth/register');
    }

    public function register(RegisterRequest $request) {
        $validated = $request->validated();
        $user = User::create($validated);

        Auth::login($user);

        return redirect()->route('dashboard');

    }
}
