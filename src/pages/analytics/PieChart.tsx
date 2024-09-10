import React from 'react';
import ReactDOM from 'react-dom';
import { Pie, PieConfig } from '@ant-design/plots';
import { CustomStyles } from '../../theme';

interface DataItem {
  type: string;
  value: number;
}

const PieChart: React.FC = () => {
  const data: DataItem[] = [
    { type: 'Level 2', value: 27 },
    { type: 'Level 3', value: 25 },
    { type: 'Level 4', value: 18 },
    { type: 'Level 5', value: 15 },
    { type: 'Level 6', value: 15 },
  ];  
  


  const config: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    padding: [0, 100, 0, 0],  // paddingRight replaced with padding array
    radius: 0.9, // Controls the outer radius
    innerRadius: 0.5, // Creates a gap between the slices

    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 10,
      },
    },

    style: {
      stroke: CustomStyles.Color.Primary.White,
      inset: 1,
      radius: 6,
    },
    annotations: [
        {
          type: 'text',
          style: {
            text: 'Highest',
            x: '50%',
            y: '45%',
            textAlign: 'center',
            fontSize: 15,
          },
        },
        {
          type: 'text',
          style: {
            text: '\nL2: 75%',
            x: '50%',
            y: '55%',
            textAlign: 'center',
            fontSize: 20,
            fontStyle: 'bold',
          },
        },
      ],
    interactions: [{ type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          // Customize style if needed
        },
        content: 'Custom Label', // Add your custom label here
      },
  },
  };

  return <Pie {...config} />;
};

export default PieChart;

