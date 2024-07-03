<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function overview() {

        // CATEGORY TRANSACTIONS
        $transactionsData = $this->categoryTransactions()[0];
        $categoriesData = $this->categoryTransactions()[1];

        // RECENT TRANSACTIONS
        $recentTransactions = \Auth::user()->transactions()->with('account', 'category')->limit(5)->get();

        return Inertia::render('Dashboard/Overview', [
            "monthlyTransactions" => $transactionsData,
            "categoriesTransactions" => $categoriesData,
            "recentTransactions" => $recentTransactions
        ]);
    }

    private function categoryTransactions(): array
    {
        $categories = \Auth::user()->budgetCategories()->get();
        $transactionSums = [];

        foreach ($categories as $category) {
            $transactionSum = (float) \Auth::user()->transactions()->where('category_id', $category->id)->sum('amount');

            $transactionSums[] = $transactionSum;
        }

        $categoryNames = $categories->pluck('name')->toArray();

        return [
            $transactionSums,
            $categoryNames
        ];
    }

    private function recentTransactions() {
        $recentTransactions = \Auth::user()->transactions()->with('account', 'category')->limit(5);


    }
}
