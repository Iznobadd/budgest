<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyBudgetChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\PieChart
    {
        return $this->chart->pieChart()
            ->addData([40, 50, 30])
            ->setLabels(['Player 7', 'Player 10', 'Player 9'])
            ->setOptions([
                'responsive' => true,
                'maintainAspectRatio' => false,
                'legendPosition' => 'bottom'
            ]);
    }
}
