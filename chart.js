import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ goldData }) => {
  const chartData = {
    labels: goldData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        label: 'Gold Rate',
        data: goldData.map((dataPoint) => dataPoint.rate),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
