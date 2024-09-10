import { Column } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { forEach, groupBy } from 'lodash-es';
import { ColumnChartData } from '../../assets/data';
import { CustomStyles } from '../../theme';



const ColumnChart: React.FC = () => {

  const annotations: any[] = [];
  forEach(groupBy(ColumnChartData, 'weekday'), (reservations, k) => {
    const reservation = reservations.reduce((a, b) => a + b.reservation, 0);
    annotations.push({
      type: 'text',
      data: [k, reservation],
      style: {
        textAlign: 'center',
        fontSize: 14,
        fill: 'rgba(0,0,0,0.85)',
      },
      xField: 'weekday',
      yField: 'reservation',
      content: `${reservation}`,
      textBaseline: 'bottom',
      position: 'top',
      textAlign: 'center',
      tooltip: false,
    });
  });


  const config = {
    data: ColumnChartData,
    xField: 'weekday',
    yField: 'reservation',
    stack: true,
    colorField: 'level',
    color: ['#19CDD7', '#DDB27C', '#DDB27C', '#DDB27C', '#DDB27C'], // Specify your custom colors here
    // label: {
    //   content: ['reservation'],
    //   position: 'inside',
    // },
    style: {
        stroke: CustomStyles.Color.Primary.White,
        inset: 1,
        radius: 6,
    },
    // annotations,
  };

  return <Column {...config} />;
};


export default ColumnChart;
