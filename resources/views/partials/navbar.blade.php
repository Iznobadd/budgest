<nav class="bg-secondary dark:bg-secondary_dark w-64 border-r border-r-border_light dark:border-r-border_dark flex flex-col transition-width duration-1000 fixed top-0 bottom-0 left-0" id="sidebar">
    <div class="h-20 w-full flex justify-center">
        <img src="{{ Vite::asset('resources/images/logo.png') }}" alt="Logo Budgest" class="p-5 max-h-full">
    </div>

    <div>
        <ul class="flex flex-col items-center justify-center text-primary">
            <li class="px-4 py-1 uppercase font-medium text-[13px] cursor-default block w-5/6">
                <span>Menu</span>
            </li>
            @include('shared.nav_list', [
                'href' => 'javascript:void(0)',
                'icon' => 'fa-solid fa-chalkboard',
                'name' => 'Dashboard',
                'dropdown' => true,
                'dropdownItems' => [
                    ['text' => 'Test 1', 'url' => 'test1'],
                    ['text' => 'Test 2', 'url' => 'test2'],
                    ['text' => 'Test 3', 'url' => 'test3'],
                ]
            ])

            @include('shared.nav_list', [
                'href' => 'TEST',
                'icon' => 'fa-solid fa-arrow-right-arrow-left',
                'name' => 'Transactions',
                'dropdown' => false
            ])

            @include('shared.nav_list', [
                'href' => 'javascript:void(0)',
                'icon' => 'fa-solid fa-coins',
                'name' => 'Budget',
                'dropdown' => true,
                'dropdownItems' => [
                    ['text' => 'Test 1', 'url' => 'test1'],
                    ['text' => 'Test 2', 'url' => 'test2'],
                    ['text' => 'Test 3', 'url' => 'test3'],
                ]
            ])

        </ul>

    </div>
</nav>

