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
        // DATA
        $data = [40, 930, 35, 42, 18, 82];
        if (count($data) < 7) {
            $data = array_pad($data, 7, 0);
        }

        // DATE
        $startDate = Carbon::now();
        $dates = [];
        for ($i = 0; $i < 30; $i++) {
            $dates[] = $startDate->copy()->addDays($i)->format('d-m');
        }

        return view('dashboard.overview', [
            'accountOverviewChart' => $accountOverviewChart->build($data, $dates),
            'monthlyBudgetChart' => $monthlyBudgetChart->build()
        ]);
    }
}
