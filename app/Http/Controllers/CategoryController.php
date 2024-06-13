<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CategoryController extends Controller
{
    public function addCategory() {
        return Inertia::render('Dashboard/AddCategory');
    }

    public function storeCategory() {

    }
}
