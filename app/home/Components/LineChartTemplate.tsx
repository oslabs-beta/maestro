/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Button } from '@mui/material';
import mdColors from './utils/GraphColors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineChartType {
  chartData: any,
}

function LineChart({ chartData }: LineChartType): JSX.Element {
  // React hooks for collapsing/expanding legend
  const [buttonClicked, setButtonClicked] = useState(false);

  const options: any = {
    responsive: true,
    pointRadius: 0,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: buttonClicked,
        position: 'left' as const,
      },
      datalabels: {
        // hide datalabels for all datasets
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgb(240, 240, 240)',
        },
        ticks: {
          color: '#797676',
        },
      },
      y: {
        grid: {
          color: 'rgb(240, 240, 240)',
        },
        ticks: {
          color: '#797676',
        },
      },
    },
  };

  // if chart data is empty render "No data available"
  if (!chartData) return <div>No data available in </div>;

  // Format chart data for line chart with varying colors
  const objArr: any = [];
  const zeroPad: any = (num: number, places: number) => String(num).padStart(places, '0');
  const now: Date = new Date();
  const nowHours = now.getHours();
  const nowMinutes = now.getMinutes();
  const times = [];
  for (let i = 1; i <= 12; i++) {
    times.push(`${zeroPad((nowHours + i * 2) % 24, 2)}:${nowMinutes}`);
  }

  for (let i = 0; i < chartData.length; i++) {
    const colors: any = mdColors;
    objArr.push({
      data: chartData[i][1].timeSeriesValues,
      label: chartData[i][0],
      borderColor: `${colors[(i * 3) % mdColors.length]}`,
    });
  }

  const data: any = {
    labels: times,
    datasets: objArr,
  };

  // Collapse or expand legend
  const handleLegendClick = () => {
    setButtonClicked((prevCheck) => !prevCheck);
  };

  return (
    <div style={{ height: 300 }}>
      <Line options={options} data={data} />
      <Button
        onClick={handleLegendClick}
        variant="outlined"
        size="small"
        sx={{ marginTop: 1, marginBottom: 3 }}
      >
        Show/Hide Legend
      </Button>
    </div>
  );
}

export default LineChart;
