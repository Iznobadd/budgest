<?php

namespace App\Http\Controllers\Dashboard;

use App\Charts\AccountOverviewChart;
use App\Charts\MonthlyBudgetChart;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\View\View;

class OverviewController extends Controller
{
    public function home(AccountOverviewChart $accountOverviewChart, MonthlyBudgetChart $monthlyBudgetChart): View {
        $monthlyBudgetPercentage = $this->monthlyBudgetPercentage();
        $categories = \Auth::user()->categories()->get();
        $transactionsByCategory = [];
        foreach ($categories as $category) {
            $transactionSum = (float) \Auth::user()->transactions()->where('category_id', $category->id)->sum('amount');

            $transactionSums[] = $transactionSum;
        }

        $categoryNames = $categories->pluck('category_name')->toArray();

        return view('dashboard.overview', [
            'monthlyBudgetChart' => $monthlyBudgetChart->build([$monthlyBudgetPercentage]),
            'accountOverviewChart' => $accountOverviewChart->build($transactionSums, $categoryNames)
        ]);
    }

    private function monthlyBudgetPercentage(): float|int
    {
        $total_budget = \Auth::user()->budgets()->first()->total_amount;
        $transactions = \Auth::user()->transactions()->sum('amount');
        return round(($transactions / $total_budget) * 100);
    }

    private function test() {
        $total_transactions = \Auth::user()->transactions()->sum('amount');
        $categories = \Auth::user()->categories()->all();
    }
}
