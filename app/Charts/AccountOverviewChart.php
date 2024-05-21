<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class AccountOverviewChart
{
    protected LarapexChart $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(array $data, array $labels): \ArielMejiaDev\LarapexCharts\PieChart
    {
        return $this->chart->pieChart()
            ->addData($data)
            ->setLabels($labels)
            ->setOptions([
                'responsive' => true,
                'maintainAspectRatio' => false,
            ]);
    }
}
