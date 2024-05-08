// src/components/ChartComponent.js
import React from 'react';
// import ApexCharts from 'apexcharts'
import { Box, Typography } from "@mui/material";
import ApexCharts from 'react-apexcharts';

const HomeChart = () => {
  const options = {
    chart: {
      id: 'basic-area',
      toolbar: {
        show: false, 
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],    
      // axisTicks: {
      //   borderType: 'dotted', // Set to 'dotted' for dotted lines
      //   color: '#78909C', // Customize the color if needed
      //   width: 2, // Adjust the width of the lines
      // },
      axisTicks: {
        borderType: 'dotted', // Set to 'dotted' for dotted lines
        color: '#78909C', // Customize the color if needed
        height: 6, // Adjust the height of the ticks
        offsetX: 2, // Horizontal offset
        offsetY: 2, // Vertical offset
      },
    },
    colors: ["#2E4AAE"],
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5
    },
    fill: {
      type: 'solid',
      opacity: [0.1, 1],
    },
    stroke: {
      width: 2,
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 5,
    },
    tooltip: {
      custom: function({series, w}) {
        return '<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2px; height: 44px; width: 142px; border-radius: 4px;">' +
        '<div style="font-size: 10px; font-weight: 500; align-items: center; color: #6C859B; line-height: 14px;">' +
        '<span>Mon, 05 Jan, 2024</span>' +
        '</div>' +
        '<div style="font-size: 12px; font-weight: 700; align-items: center; color: #2E4AAE; line-height: 18px;">' +
        '<span>Attendance: 126/205</span>' +
        '</div>' +
        '</div>'
      }
    }
  };

  const series = [
    {
      name: 'series-1',
      data: [67, 30, 60, 50, 25, 46, 90, 61],
    },
  ];

  return (
    <div className="chart-container">
      <ApexCharts options={options} series={series} type="area" width="100%" height="296px"/>
    </div>
  );
};

export default HomeChart;
