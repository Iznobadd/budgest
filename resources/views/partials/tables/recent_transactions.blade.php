<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                ACCOUNT
            </th>
            <th scope="col" class="px-6 py-3">
                CATEGORY
            </th>
            <th scope="col" class="px-6 py-3">
                DATE
            </th>
            <th scope="col" class="px-6 py-3">
                AMOUNT
            </th>
        </tr>
        </thead>
        <tbody>
        @foreach($recentTransactions as $transaction)
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ Auth::user()->budgets()->first()->budget_name }}
                </th>
                <td class="px-6 py-4">
                    {{ $transaction->category->category_name }}
                </td>
                <td class="px-6 py-4">
                    {{ \Carbon\Carbon::parse($transaction->transaction_date)->format('d/m/Y') }}
                </td>
                <td class="px-6 py-4">
                    {{ $transaction->amount }}€
                </td>
            </tr>
        @endforeach


        </tbody>
    </table>
</div>
