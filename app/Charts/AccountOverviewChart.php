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

    public function build(array $data, array $dates): \ArielMejiaDev\LarapexCharts\AreaChart
    {
        return $this->chart->areaChart()
            ->addData('Physical sales', $data)
            ->setXAxis($dates)
            ->setOptions([
                'responsive' => true,
                'maintainAspectRatio' => false,
            ]);
    }
}
