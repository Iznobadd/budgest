<?php

namespace App\Http\Controllers;

use App\Enums\AccountType;
use App\Http\Requests\Account\CreateAccountRequest;
use App\Models\Account;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function addAccount() {
        $options = [];
        foreach(AccountType::cases() as $case) {
            $options[] = [
                'label' => ucfirst($case->name),
                "value" => $case->value
            ];
        }

        return Inertia::render("Dashboard/AddAccount", [
            'options' => $options
        ]);
    }

    public function storeAccount(CreateAccountRequest $request) {
        $validatedData = $request->validated();
        $validatedData['user_id'] = \Auth::user()->id;

        Account::create($validatedData);

        return to_route('dashboard.overview')->with('success', 'The account has been added successfully');
    }
}
