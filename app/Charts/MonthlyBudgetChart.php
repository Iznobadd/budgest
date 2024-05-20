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

    public function build(array $data): \ArielMejiaDev\LarapexCharts\RadialChart
    {
        return $this->chart->radialChart()
            ->addData($data)
            ->setLabels(['Budget'])
            ->setShowLegend(false)
            ->setOptions([
                'responsive' => true,
                'maintainAspectRatio' => false,
            ]);
    }
}
