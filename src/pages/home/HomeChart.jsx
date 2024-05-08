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
    // tooltip: {
    //   custom: function({series, seriesIndex, dataPointIndex, w}) {
    //     // return 
    //     // '<div class="arrow_box">' +
    //     //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
    //     //   '</div>'

          
    //     return '<div style={{ width:"142px", borderRadius:"4px", paddingLeft:"8px", paddingRight:"8px", paddingTop:"5px", paddingBottom:"5px", boxShadow: "0px 2px 14px 0px #3A414F29", gap:"2px"}}>' +
    //       '  <span style={{ fontSize: "10px", fontWeight: 500, lineHeight: "14px", color: "#6C859B",}}> Mon, 05 Jan, 2024 </span>' +
    //       '  <span style={{ fontSize: "12px", fontWeight: 700, lineHeight: "18px", color: "#2E4AAE", }} > Attendance: 126/205 </span>' +
    //       '</div>'


          
    //       // <div display="flex" flexDirection="column" width="142px" borderRadius="4px" paddingLeft="8px" paddingRight="8px" paddingTop="5px" paddingBottom="5px" boxShadow= "0px 2px 14px 0px #3A414F29" gap="2px">
    //       // <span fontSize="10px" fontWeight={500} lineHeight="14px" color="#6C859B"> Mon, 05 Jan, 2024 </span>
    //       // <span fontSize="12px" fontWeight={700} lineHeight="18px" color="#2E4AAE"> Attendance: 126/205 </span>
    //       // </div>         
    //       // '<Box display="flex" flexDirection="column" width="142px" borderRadius="4px" paddingLeft="8px" paddingRight="8px" paddingTop="5px" paddingBottom="5px" boxShadow= "0px 2px 14px 0px #3A414F29" gap="2px">' +
    //       // '<Typography fontSize="10px" fontWeight={500} lineHeight="14px" color="#6C859B"> Mon, 05 Jan, 2024 </Typography>' +
    //       // '<Typography fontSize="12px" fontWeight={700} lineHeight="18px" color="#2E4AAE"> Attendance: 126/205 </Typography>' +
    //       // '</Box>'
    //   }
    // },
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
