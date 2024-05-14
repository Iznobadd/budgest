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

            <form action="" class="mt-10">
                <div class="mb-3">
                    <label for="email-field" class="inline-block mb-2 text-base font-medium">Email</label>
                    <input type="text" id="email-field" class="form-input border-slate-200 focus:outline-none focus:border-blue disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Enter email">
                </div>
                <div class="mb-3">
                    <label for="username-field" class="inline-block mb-2 text-base font-medium">Username</label>
                    <input type="text" id="username-field" class="form-input border-slate-200 focus:outline-none focus:border-blue disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Enter username">
                </div>
                <div class="mb-3">
                    <label for="pwd-field" class="inline-block mb-2 text-base font-medium">Password</label>
                    <input type="password" id="pwd-field" class="form-input border-slate-200 focus:outline-none focus:border-blue disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Enter password">
                </div>

                <div class="mt-10">
                    <button type="submit" class="w-full text-white transition-all duration-200 ease-linear btn bg-blue border-blue hover:text-white hover:bg-blue_accent hover:border-blue_accent focus:text-white focus:bg-blue focus:border-blue">Sign Up</button>
                </div>
            </form>

            <div class="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200">
                <h5 class="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 rounded relative">Create account with</h5>
            </div>

            <div class="mt-10 text-center">
                <p class="mb-0 text-slate-500">Already have an account ? <a href="#" class="font-semibold underline transition-all duration-150 ease-linear text-slate-500 hover:text-blue ">Login</a> </p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
