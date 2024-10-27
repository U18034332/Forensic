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
      ],
      itemStyle: {
        borderRadius: 10, 
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
    };

    chart.setOption(option);
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }

  
  initAdditionalCharts(): void {
    // Existing Pie Chart (Status - Pie Chart)
    const chart1Dom = document.getElementById('chart1') as HTMLDivElement;
    const chart1 = echarts.init(chart1Dom);
  
    const chart1Option: echarts.EChartsOption = {
      title: {
        text: 'Status - Pie Chart',
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
          itemStyle: {
            //borderRadius: 10,  // Apply border radius
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
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
  
    // New Bar Chart on the right-hand side
    const chart2Dom = document.getElementById('chart2') as HTMLDivElement;
    const chart2 = echarts.init(chart2Dom);
  
    const data: number[] = [4902, 5088, 1312, 2737, 2737, 2737];
    const yAxisLabels: string[] = ['Hotline', 'Walk-ins', 'e-Mail', 'Website', 'Telephone', 'Post'];
  
    const chart2Option: echarts.EChartsOption = {
      xAxis: {
        max: 'dataMax'
      },
      yAxis: {
        type: 'category',
        data: yAxisLabels,
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }
      ],
      itemStyle: {
        //borderRadius: 10,  // Apply border radius
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      legend: {
        show: true
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };
  
    chart2.setOption(chart2Option);
    window.addEventListener('resize', () => {
      chart2.resize();
    });
  
    function run() {
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      chart2.setOption<echarts.EChartsOption>({
        series: [
          {
            type: 'bar',
            data
          }
        ]
      });
    }
  
    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);
  
    // New Pie Chart Below Existing Charts on Left Side
    const pieChartDom = document.createElement('div');
    pieChartDom.style.width = '100%';
    pieChartDom.style.height = '300px'; // Adjust the height as needed
    chart1Dom.appendChild(pieChartDom);
    const pieChart = echarts.init(pieChartDom);
  
    const pieChartOption: echarts.EChartsOption = {
      //backgroundColor: '#f4f4f4',
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 35, name: 'Finance' },
            { value: 60, name: 'ICT' },
            { value: 10, name: 'Operations' },
            { value: 15, name: 'Legal' },
            { value: 5, name: 'Regulatory Compliance' },
            { value: 12, name: 'Office of the Commissioner' }
          ],
          itemStyle: {
            //borderRadius: 10,  // Apply border radius
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
        }
      ]
    };
  
    pieChart.setOption(pieChartOption);
    window.addEventListener('resize', () => {
      pieChart.resize();
    });
  }
  
  
}
