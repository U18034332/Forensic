import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('echart') as HTMLDivElement;
    const chart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Percentage Data for South African Provinces'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        }
      },
      yAxis: {
        type: 'category',
        data: [
          'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 
          'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'
        ]
      },
      series: [
        {
          name: 'Percentage',
          type: 'bar',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          label: {
            show: true,
            position: 'insideRight',
            formatter: '{c} %'
          }
        }
      ]
    };

    chart.setOption(option);

    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
  initAdditionalCharts(): void {
    const chart1Dom = document.getElementById('chart1') as HTMLDivElement;
    const chart1 = echarts.init(chart1Dom);

    const chart1Option: echarts.EChartsOption = {
      title: {
        text: 'Additional Chart 1'
      },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Series 1',
          type: 'line',
          data: [5, 20, 36, 10]
        }
      ]
    };

    chart1.setOption(chart1Option);
    window.addEventListener('resize', () => {
      chart1.resize();
    });

    const chart2Dom = document.getElementById('chart2') as HTMLDivElement;
    const chart2 = echarts.init(chart2Dom);

    const chart2Option: echarts.EChartsOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    chart2.setOption(chart2Option);
    window.addEventListener('resize', () => {
      chart2.resize();
    });
  }

  
}
