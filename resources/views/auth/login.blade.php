@extends('auth.base')

@section('title', 'Login | Budgest')

@section('content')
            <div class="mt-8 text-center">
                <h4 class="mb-1 text-blue font-bold text-2xl">Welcome Back !</h4>
                <p class="text-slate-500">Sign in to continue to Budgest</p>
            </div>

            <form action="{{ route('login') }}" method="POST" class="mt-10">
                @csrf
                @method('POST')

                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Email', 'field' => 'email-field', 'type' => 'email', 'name' => 'email', 'placeholder' => 'Enter email', 'isRequired' => true])
                </div>

                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Password', 'field' => 'password-field', 'type' => 'password', 'name' => 'password', 'placeholder' => 'Enter password', 'isRequired' => true])
                </div>

                <div class="mt-10">
                    <button type="submit" class="w-full text-white transition-all duration-200 ease-linear btn bg-blue border-blue hover:text-white hover:bg-blue_accent hover:border-blue_accent focus:text-white focus:bg-blue focus:border-blue">Sign Up</button>
                </div>
            </form>

            <div class="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200">
                <h5 class="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 rounded relative">Sign in with</h5>
            </div>

            <div class="">
                <a href="{{ route("googleAuth") }}" class="cursor-pointer w-full justify-center px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400  hover:text-slate-900 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
                    <span>Continue with Google</span>
                </a>
            </div>

            <div class="mt-10 text-center">
                <p class="mb-0 text-slate-500">Don't have an account ? <a href="{{ route('register') }}" class="font-semibold underline transition-all duration-150 ease-linear text-slate-500 hover:text-blue ">Sign up</a> </p>
            </div>
@endsection
