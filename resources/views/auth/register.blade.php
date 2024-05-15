<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    @vite('resources/css/app.css')
    @vite('resources/js/app.js')

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
</head>
<body class="bg-primary flex items-center justify-center min-h-screen py-16 lg:-py-10">
<div class="relative bg-white rounded">
    <div class="mb-0 w-screen lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
        <div class="!px-10 !py-12 card-body">
            <a href="#">
                <img src="{{ Vite::asset('resources/images/logo.png') }}" alt="Logo Budgest" class="block h-6 mx-auto">
            </a>

            <div class="mt-8 text-center">
                <h4 class="mb-1 text-blue font-bold text-2xl">Create your free account</h4>
                <p class="text-slate-500">Get your free Budgest account now</p>
            </div>

            <form action="{{ route('register') }}" method="POST" class="mt-10">
                @csrf
                @method('POST')

                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Email', 'field' => 'email-field', 'type' => 'email', 'name' => 'email', 'placeholder' => 'Enter email', 'isRequired' => true])
                </div>
                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Username', 'field' => 'username-field', 'type' => 'text', 'name' => 'name', 'placeholder' => 'Enter username', 'isRequired' => true])
                </div>

                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Password', 'field' => 'password-field', 'type' => 'password', 'name' => 'password', 'placeholder' => 'Enter password', 'isRequired' => true])
                </div>
                <div class="mb-3">
                    @include('shared.input_with_error', ['label' => 'Password Confirmation', 'field' => 'password-confirm-field', 'type' => 'password', 'name' => 'password_confirmation', 'placeholder' => 'Enter password confirmation', 'isRequired' => true])              </div>

                <div class="mt-10">
                    <button type="submit" class="w-full text-white transition-all duration-200 ease-linear btn bg-blue border-blue hover:text-white hover:bg-blue_accent hover:border-blue_accent focus:text-white focus:bg-blue focus:border-blue">Sign Up</button>
                </div>
            </form>

            <div class="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200">
                <h5 class="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 rounded relative">Create account with</h5>
            </div>

            <div class="">
                <a href="{{ route("googleRegister") }}" class="cursor-pointer w-full justify-center px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400  hover:text-slate-900 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
                    <span>Sign up with Google</span>
                </a>
            </div>

            <div class="mt-10 text-center">
                <p class="mb-0 text-slate-500">Already have an account ? <a href="#" class="font-semibold underline transition-all duration-150 ease-linear text-slate-500 hover:text-blue ">Login</a> </p>
            </div>

        </div>

    </div>
</div>
</body>
</html>
