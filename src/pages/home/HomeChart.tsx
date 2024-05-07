import * as React from 'react';
import { LineChart } from '@mui/x-charts';

export default function HomeChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
      series={[
        {
          data: [45, 32, 62, 18, 29, 17, 30, 70],
          area: true,
        },
      ]}
    />
  );
}
