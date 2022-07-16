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
import mdColors from './GraphColors';
import { Button } from '@mui/material';
import { LabelSharp } from '@mui/icons-material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChart {
    chartData?: any,
    title?: any,
    label?: any
}

const LineChart = ({ chartData, title, label }: LineChart): JSX.Element => {
  // React hooks for collapsing/expanding legend
  const [buttonClicked, setButtonClicked] = useState(false);
  const [labelsState, setLabelsState] = useState('');

  
const options: any = {
    responsive: true,
    pointRadius: 0,
    indexAxis: 'x',
    // background-color: 'red',
    // maintainAspectRatio: false,


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
          color: 'rgb(240, 240, 240)'
        },
        ticks: {
          color: '#797676',
        }
      },
      y: {
        grid: {
          color: 'rgb(240, 240, 240)'
        },
        ticks: {
          color: '#797676',
        }
      },
    },
  };

  // if chart data is empty render "No data available"
  if (!chartData) return <div>No data available in </div>;
//   if(chartData[1]) {
//       setLabelsState(chartData[1][1].timestamps)
//   }
  
  // Format chart data for line chart with varying colors
  const objArr:any = [];
  //can be used for labels
  let now: Date = new Date();
  console.log('now', now)
  // while
  let times = ['00:12', '02:12', '04:12', '06:12', '08:12', '10:12', '12:12', '14:12', '16:12', '18:12', '20:12', '22:12']
  
for(let i = 0; i < chartData.length; i++){
    // console.log(chartData[1][1].timestamps)
    // console.log('mdColors[i*3]',mdColors[i*3])
    const colors: any = mdColors;
    objArr.push({
      data: chartData[i][1].timeSeriesValues,
      label: chartData[i][0],
      borderColor: `${colors[i * 3 % mdColors.length]}`,
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    });
  };
  

  const data:any = {
    labels: times,
    datasets: objArr,
  };
  let id = 1;

  // Collapse or expand legend
  const handleLegendClick = () => {
    setButtonClicked((prevCheck) => !prevCheck);
  };

  return (
    <div style={{ height: 800 }}>
      <Line options={options} data={data} />
      <Button
        onClick={handleLegendClick}
        variant='outlined'
        size='small'
        sx={{ marginTop: 1, marginBottom: 3 }}
      >
        Show/Hide Legend
      </Button>
    </div>
  );
};

export default LineChart;