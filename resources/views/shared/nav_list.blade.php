<li class="w-full my-2">
    <a href="{{ $href }}" onclick="toggleDropdown(event)" class="hover:text-secondary w-5/6 text-center py-2.5 text-[10px] rounded hover:bg-accent hover:dark:bg-accent_dark flex justify-between px-4 items-center mx-auto">
        <div class="text-[15px] flex items-center">
            <i class="{{ $icon }}"></i>
            <span class="ml-2">{{ $name }}</span>
        </div>
        <i class="fa-solid fa-chevron-right transition-transform duration-300 {{ $dropdown ? '' : 'opacity-0' }}"></i>
    </a>
    @if($dropdown)
        <ul class="hidden w-full mt-2 pl-14 list-disc hover:dark:" id="dropdown-menu">
            @foreach($dropdownItems as $item)
                <li class="py-1"><a href="{{ $item['url'] }}" class="block hover:text-secondary">{{ $item['text'] }}</a></li>
            @endforeach
        </ul>
    @endif

</li>
