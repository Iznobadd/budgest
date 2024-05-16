<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    @vite('resources/css/app.css')
    @vite('resources/js/sidebar.js')
    @vite('resources/js/switchMode.js')

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
</head>
<body class="">
<div class="flex h-screen">
    @include("partials.navbar")

    <main class="bg-primary dark:bg-primary_dark flex-1 relative ml-64 transition-margin duration-1000" id="main">
        <header
            class="sticky top-0 w-full h-20 bg-secondary dark:bg-secondary_dark flex items-center px-4 justify-between">
            <div>
                <i class="fa-solid fa-angles-left cursor-pointer p-4 rounded text-icons dark:text-primary hover:text-icons hover:bg-accent hover:dark:bg-accent_dark"
                   id="toggleSidebar"></i>
            </div>
            <div class="flex items-center gap-3">
                <input type="checkbox" id="light-switch" class="light-switch sr-only"/>
                <label for="light-switch">
                    <i class="fa-solid fa-sun dark:hidden block cursor-pointer p-4 rounded text-icons hover:bg-accent"></i>
                    <i class="fa-solid fa-moon hidden dark:block cursor-pointer p-4 rounded text-primary hover:text-white hover:dark:bg-accent_dark"></i>
                    <span class="sr-only">Switch to light / dark version</span>
                </label>
                <div>
                    @if(Auth::user()->avatar_url)
                        <img src="{{ Auth::user()->avatar_url }}" alt="" class="rounded-full w-[37.5px] h-[37.5px]">
                    @else
                        <img src="{{ Vite::asset('resources/images/avatar.png') }}" alt="" class="rounded-full w-[37.5px] h-[37.5px]">
                    @endif

                </div>
            </div>


        </header>
    </main>
</div>
</body>
</html>
