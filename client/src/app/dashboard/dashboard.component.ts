import { Component, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.initChart();
    this.initAdditionalCharts();
  }

  
  initChart(): void {
    const chartDom = document.getElementById('echart') as HTMLDivElement;
    const chart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Percentage Data for South African Provinces'
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
        text: 'Status - Pie Chart',
        // subtext: 'Fake Data',
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
            { value: 1048, name: 'Completed' },
            { value: 735, name: 'New Cases' },
            { value: 484, name: 'Closed Cases' },
            { value: 300, name: 'In Progress Cases' }
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
    
    

    chart1.setOption(chart1Option);
    window.addEventListener('resize', () => {
      chart1.resize();
    });
  }
}
