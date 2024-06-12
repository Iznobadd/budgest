<?php

namespace App\Http\Controllers;

use App\Enums\AccountType;
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

    public function storeAccount() {

    }
}
