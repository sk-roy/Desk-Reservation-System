// src/components/ChartComponent.js
import React from 'react';
// import ApexCharts from 'apexcharts'
// import { Box, Typography } from "@mui/material";
import ApexCharts from 'react-apexcharts';
      

const  BarChart = () => {

    const options = {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
      },
      colors: ['#5546D6', '#8B7BFF', '#1B98FF', '#00CCC9'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 3,
          borderRadiusWhenStacked: "all",
          borderRadiusApplication: "around",
          horizontal: false,
          dataLabels: {
            enabled: true,
            total: {
              enabled: false,
            }
          },          
        },
      },
      dataLabels: {
          enabled: false, // Hide individual bars' values
          offsetX: 0,
      },
      stroke: {
        width: 1,
        colors: ['#FFFFFF']
      },
      column: {
        width: '24px' // Set your desired width here
      },      
      xaxis: {
        categories: ['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
        labels: {
          formatter: function (val) {
            return val
          }
        }
      },
      yaxis: {
        max: 100,
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      // fill: {
      //   opacity: 1,
      // },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -10
      },
    };

    
    const series = [{
        name: 'Level 2',
        data: [44, 25, 41, 37, 22, 43, 21, 12, 21, 41]
      }, {
        name: 'Level 3',
        data: [24, 32, 13, 12, 13, 13, 32, 5, 16, 4]
      }, {
        name: 'Level 4',
        data: [12, 17, 11, 9, 15, 11, 20, 8, 13, 9]
      }, {
        name: 'Level 5',
        data: [9, 7, 5, 8, 6, 9, 4, 21, 11, 5]
      }];

    return (
        <div className="bar-chart-container">
            <ApexCharts options={options} series={series} type='bar' width="100%" height="210px"/>
        </div>
      );
    
} 

export default BarChart;
        