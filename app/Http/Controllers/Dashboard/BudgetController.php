<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class BudgetController extends Controller
{
    public function createForm(): View {
        return view('dashboard.budget.create');
    }

    public function create() {

    }
}
