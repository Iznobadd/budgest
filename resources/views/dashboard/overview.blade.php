@extends('dashboard.base')

@section('title', 'Dashboard | Budgest')


@section('content')

    <div class="grid gap-4 xl:grid-cols-2">
{{--        @include('partials.graphs.account_overview')--}}
        @include('partials.graphs.monthly_budget')
    </div>

    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        @include('partials.tables.recent_transactions')
    </div>

@endsection


@section('script')
    <script src="{{ $monthlyBudgetChart->cdn() }}"></script>
{{--    {{ $accountOverviewChart->script() }}--}}
    {{ $monthlyBudgetChart->script() }}
@endsection
