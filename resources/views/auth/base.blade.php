<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

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

            @yield('content')

        </div>

    </div>
</div>
</body>
</html>
