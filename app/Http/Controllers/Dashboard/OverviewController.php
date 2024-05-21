<?php

namespace App\Http\Controllers\Dashboard;

use App\Charts\CategoryTransactionsChart;
use App\Charts\MonthlyBudgetChart;
use App\Http\Controllers\Controller;
use Illuminate\View\View;

class OverviewController extends Controller
{
    public function home(CategoryTransactionsChart $categoryTransactionsChart, MonthlyBudgetChart $monthlyBudgetChart): View {

        // MONTHLY BUDGET
        $monthlyBudgetPercentage = $this->monthlyBudgetPercentage();

        // CATEGORY TRANSACTIONS
        $transactionsData = $this->categoryTransactions()[0];
        $categoriesData = $this->categoryTransactions()[1];

        // RECENT TRANSACTIONS


        return view('dashboard.overview', [
            'monthlyBudgetChart' => $monthlyBudgetChart->build([$monthlyBudgetPercentage]),
            'categoryTransactionsChart' => $categoryTransactionsChart->build($transactionsData, $categoriesData)
        ]);
    }

    private function monthlyBudgetPercentage(): float|int
    {
        $total_budget = \Auth::user()->budgets()->first()->total_amount;
        $transactions = \Auth::user()->transactions()->sum('amount');
        return round(($transactions / $total_budget) * 100);
    }

    private function categoryTransactions(): array
    {
        $categories = \Auth::user()->categories()->get();
        $transactionSums = [];

        foreach ($categories as $category) {
            $transactionSum = (float) \Auth::user()->transactions()->where('category_id', $category->id)->sum('amount');

            $transactionSums[] = $transactionSum;
        }

        $categoryNames = $categories->pluck('category_name')->toArray();

        return [
            $transactionSums,
            $categoryNames
        ];
    }
}
