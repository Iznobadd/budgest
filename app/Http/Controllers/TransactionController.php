<?php

namespace App\Http\Controllers;

use App\Http\Requests\Transaction\CreateTransactionRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function addTransaction() {
        $categories = \Auth::user()->categories->all();
        $options = [];
        foreach($categories as $category) {
            $options[] = [
                "label" => $category->category_name,
                "value" => $category->id
            ];
        }

        return Inertia::render("Dashboard/AddTransactions", [
            "options" => $options
        ]);
    }
}
