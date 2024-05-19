<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Budget\CreateBudgetRequest;
use App\Models\Budget;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class BudgetController extends Controller
{
    public function createForm(): View {
        return view('dashboard.budget.create');
    }

    public function create(CreateBudgetRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        Budget::create([
           'user_id' => Auth::id(),
           'budget_name' => $validatedData['budget_name'],
           'total_amount' => $validatedData['total_amount'],
           'start_day' => $validatedData['start_day'],
        ]);

        return redirect()->route('dashboard.overview');
    }
}
