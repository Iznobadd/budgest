@extends('auth.base')

@section('title', 'Create a Budget | Budgest')

@section('content')
    <div class="mt-8 text-center">
        <h4 class="mb-1 text-blue font-bold text-2xl">Create an initial Budget</h4>
    </div>

    <form action="{{ route('auth.create_budget') }}" method="POST" class="mt-10">
        @csrf
        @method('POST')

        <div class="mb-3">
            @include('shared.input_with_error', ['label' => 'Name', 'field' => 'name-field', 'type' => 'text', 'name' => 'budget_name', 'placeholder' => 'Enter a name for your budget', 'isRequired' => true])
        </div>
        <div class="mb-3">
            @include('shared.input_with_error', ['label' => 'Amount', 'field' => 'amount-field', 'type' => 'number', 'name' => 'total_amount', 'placeholder' => 'Enter your budget', 'isRequired' => true])
        </div>

        <div class="mb-3">
            @include('shared.input_with_error', ['label' => 'Start day', 'field' => 'day-field', 'type' => 'number', 'name' => 'start_day', 'placeholder' => 'Enter the start day of your budget', 'isRequired' => true])
        </div>

        <div class="mt-10">
            <button type="submit" class="w-full text-white transition-all duration-200 ease-linear btn bg-blue border-blue hover:text-white hover:bg-blue_accent hover:border-blue_accent focus:text-white focus:bg-blue focus:border-blue">Create my budget</button>
        </div>
    </form>

@endsection
