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
// import mdColors from './MaterialColors';
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

  
const options = {
    responsive: true,
    plugins: {
      legend: {
        display: buttonClicked,
        position: 'left' as const,
      },
      title: {
        display: true,
        text: 'Cluster Data',
      },
      datalabels: {
        // hide datalabels for all datasets
        display: false,
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
  let times =  ['2022-07-14T19:02:41.093Z','2022-07-14T19:03:41.093Z','2022-07-14T19:04:41.093Z','2022-07-14T19:05:41.093Z','2022-07-14T19:06:41.093Z','2022-07-14T19:07:41.093Z','2022-07-14T19:08:41.093Z','2022-07-14T19:09:41.093Z','2022-07-14T19:10:41.093Z','2022-07-14T19:11:41.093Z','2022-07-14T19:12:41.093Z','2022-07-14T19:13:41.093Z','2022-07-14T19:14:41.093Z','2022-07-14T19:15:41.093Z','2022-07-14T19:16:41.093Z'] 

for(let i = 0; i < chartData.length; i++){
    // console.log(chartData[1][1].timestamps)
    objArr.push({
      data: chartData[i][1].timeSeriesValues,
      label: chartData[i][0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
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