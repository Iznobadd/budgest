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

        return view('dashboard.overview', [
            'monthlyBudgetChart' => $monthlyBudgetChart->build([$monthlyBudgetPercentage])
        ]);
    }

    private function monthlyBudgetPercentage(): float|int
    {
        $total_budget = \Auth::user()->budgets()->first()->total_amount;
        $transactions = \Auth::user()->transactions()->sum('amount');
        return round(($transactions / $total_budget) * 100);
    }
}
