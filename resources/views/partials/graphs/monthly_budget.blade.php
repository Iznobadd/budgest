<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div class="flex items-center justify-between mb-4">
        <div class="flex-shrink-0">
            <span class="text-xl font-bold leading-none text-gray-500 sm:text-xl dark:text-white">MONTHLY BUDGET</span>
            <h3 class="text-base font-light text-gray-500 dark:text-gray-400">
                % OF BUDGET USED
            </h3>
        </div>
{{--        <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">--}}
{{--            12.5%--}}
{{--            <i class="fa-solid fa-arrow-up w-5 h-5 ml-2"></i>--}}
{{--        </div>--}}
    </div>
    {!! $monthlyBudgetChart->container() !!}

{{--    <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">--}}
{{--        <div>--}}
{{--            <button class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>--}}
{{--            <!-- Dropdown menu -->--}}
{{--            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="weekly-sales-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(355px, 707px);" data-popper-placement="bottom">--}}
{{--                <div class="px-4 py-3" role="none">--}}
{{--                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">--}}
{{--                        Sep 16, 2021 - Sep 22, 2021--}}
{{--                    </p>--}}
{{--                </div>--}}
{{--                <ul class="py-1" role="none">--}}
{{--                    <li>--}}
{{--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>--}}
{{--                    </li>--}}
{{--                    <li>--}}
{{--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>--}}
{{--                    </li>--}}
{{--                    <li>--}}
{{--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>--}}
{{--                    </li>--}}
{{--                    <li>--}}
{{--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>--}}
{{--                    </li>--}}
{{--                    <li>--}}
{{--                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>--}}
{{--                    </li>--}}
{{--                </ul>--}}
{{--                <div class="py-1" role="none">--}}
{{--                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <div class="flex-shrink-0">--}}
{{--            <a href="#" class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">--}}
{{--                Sales Report--}}
{{--                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>--}}
{{--            </a>--}}
{{--        </div>--}}
{{--    </div>--}}
</div>
