<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\AccountType;

class HomeController extends Controller
{
    public function overview() {

        // Options
        $accountOptions = $this->accountOptions();
        $transactionAccountOptions = $this->transactionAccountOptions();
        $transactionCategoryOptions = $this->transactionCategoryOptions();

        // CATEGORY TRANSACTIONS
        $transactionsData = $this->categoryTransactions()[0];
        $categoriesData = $this->categoryTransactions()[1];

        // RECENT TRANSACTIONS
        $recentTransactions = \Auth::user()->transactions()->with('account', 'category')->limit(5)->get();

        return Inertia::render('Dashboard/Overview', [
            "monthlyTransactions" => $transactionsData,
            "categoriesTransactions" => $categoriesData,
            "recentTransactions" => $recentTransactions,
            "accountOptions" => $accountOptions,
            "transactionAccountOptions" => $transactionAccountOptions,
            "transactionCategoryOptions" => $transactionCategoryOptions
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

    private function accountOptions() {
        $options = [];
        foreach(AccountType::cases() as $case) {
            $options[] = [
                'label' => ucfirst($case->name),
                "value" => $case->value
            ];
        }
        return $options;
    }

    private function transactionAccountOptions() {
        $accounts = \Auth::user()->accounts()->get();
        $accountsOptions = [];
        foreach($accounts as $account) {
            $accountsOptions[] = [
                "label" => $account->name,
                "value" => $account->id
            ];
        }
        return $accountsOptions;
    }

    private function transactionCategoryOptions() {
        $categories = \Auth::user()->budgetCategories()->get();
        $categoriesOptions = [];
        foreach($categories as $category) {
            $categoriesOptions[] = [
                "label" => $category->name,
                "value" => $category->id
            ];
        }
        return $categoriesOptions;
    }
}
