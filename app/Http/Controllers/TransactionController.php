<?php

namespace App\Http\Controllers;

use App\Http\Requests\Transaction\CreateTransactionRequest;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function list() {
        $transactions = \Auth::user()->transactions()->with('account', 'category')->get();
        return Inertia::render('Dashboard/Transaction/ListTransaction', [
            'transactions' => $transactions
        ]);
    }

    public function addTransaction() {
        $categories = \Auth::user()->budgetCategories()->get();
        $categoriesOptions = [];
        foreach($categories as $category) {
            $categoriesOptions[] = [
                "label" => $category->name,
                "value" => $category->id
            ];
        }

        $accounts = \Auth::user()->accounts()->get();
        $accountsOptions = [];
        foreach($accounts as $account) {
            $accountsOptions[] = [
                "label" => $account->name,
                "value" => $account->id
            ];
        }

        return Inertia::render("Dashboard/AddTransactions", [
            "categoriesOptions" => $categoriesOptions,
            "accountsOptions" => $accountsOptions
        ]);
    }

    public function storeTransaction(CreateTransactionRequest $request) {
        $validatedData = $request->validated();
        $validatedData['user_id'] = \Auth::user()->id;
        $validatedData['transaction_date'] = Carbon::parse($validatedData['transaction_date'])->setTimezone(config('app.timezone'))->toDateString();

        Transaction::create($validatedData);

        return to_route('dashboard.overview')->with('success', 'The transaction has been added successfully');
    }
}
