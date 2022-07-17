import { AnalyticsOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../state/hooks';
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
// import LineChart from './LineChartTemplate';


function MetricsGraphCard() {

  return (
    <div className='metrics-graph-card'>
      MetricsGraphCard
    </div>
  )
}

export default MetricsGraphCard