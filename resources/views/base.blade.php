<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
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
    <body class="">
    <div class="flex h-screen">
        @include("partials/navbar")

        <main class="bg-gray-500 flex-1">
            <header class="fixed w-full h-20 bg-white flex items-center px-4">
                <div>
                    <i class="fa-solid fa-chevron-left cursor-pointer p-4 rounded" id="toggleSidebar"></i>
                </div>
                <div></div>
            </header>
        </main>
    </div>
    </body>
</html>
