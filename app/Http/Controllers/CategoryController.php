<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\CreateCategoryRequest;
use App\Models\BudgetCategory;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function addCategory() {
        return Inertia::render('Dashboard/AddCategory');
    }

    public function storeCategory(CreateCategoryRequest $request) {
        $validatedData = $request->validated();
        $validatedData['user_id'] = \Auth::user()->id;

        BudgetCategory::create($validatedData);

        return to_route('dashboard.overview')->with('success', 'The category has been added successfully');
    }
}
