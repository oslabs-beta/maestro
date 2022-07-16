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
import LineChart from './LineChartTemplate';

interface HomeGraphCard {
  type?: any,
  source?: any,
}

const HomeGraphCard = ({ type, source}: HomeGraphCard): JSX.Element => {
  const [graphData, setGraphData] = useState([])
  const [formattedData, setFormattedData]:any = useState([])
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace) 
 
//conditional rendering based on type and source options

const getData = async (): Promise<any> =>{
  if(!namespace) namespace='default'
  console.log(namespace, 'namespace')

  //namespace
  if(source === 'Namespace'){
    if(type === 'Memory'){
      console.log(source, type)
      const getMemoryUsageByNamespace = await window.electron.getMemoryUsageByNamespace(namespace)
      const data = Object.entries(getMemoryUsageByNamespace)
      setGraphData(data)
     
      

    }else if(type === 'CPU'){
      console.log(source, type)
      const getCPUUsageByNamespace = await window.electron.getCPUUsageByNamespace(namespace)
      const data = Object.entries(getCPUUsageByNamespace)
      setGraphData(data)
      
      

    }else if(type === 'Bytes'){
      console.log(source, type)
      const bytesRecievedByNamespace = await window.electron.bytesRecievedByNamespace(namespace)
      const bytesTransmittedByNamespace = await window.electron.bytesTransmittedByNamespace(namespace)
      const data = Object.entries(bytesRecievedByNamespace )
      setGraphData(data)
      
    }
  }

  //node
  else if(source === 'Nodes'){
    if(type === 'Memory'){
      console.log(source, type)
     const getMemoryUsageByNode = await window.electron.getMemoryUsageByNode(namespace)
     const data = Object.entries(getMemoryUsageByNode)
     setGraphData(data)
      

    }else if(type === 'CPU'){
      console.log(source, type)
      const getCPUUsageByNode = await window.electron.getCPUUsageByNode(namespace)
      const data = Object.entries(getCPUUsageByNode)
      setGraphData(data)
     

    }else if(type === 'Bytes'){
      console.log(source, type)
      const bytesRecievedByNode = await window.electron.bytesTransmittedByNode(namespace)
      const bytesTransmittedByNode = await window.electron.bytesTransmittedByNode(namespace)
      const data = Object.entries(bytesRecievedByNode)
      setGraphData(data)
      

    }
  }

  //pods
  else if(source === 'Pods'){
    if(type === 'Memory'){
      console.log(source, type)
      const getMemoryUsageByPod = await window.electron.getMemoryUsageByPod(namespace)
      const data = Object.entries(getMemoryUsageByPod)
      setGraphData(data)
      

    }else if(type === 'CPU'){
      console.log(source, type)
      const getCPUUsageByPod = await  window.electron.getCPUUsageByPod(namespace)
      const data = Object.entries(getCPUUsageByPod)
      setGraphData(data)
      

    }else if(type === 'Bytes'){
      console.log(source, type)
      const bytesRecievedByPod = await window.electron.bytesRecievedByPod(namespace)
      const bytesTransmittedByPod = await window.electron.bytesTransmittedByPod(namespace)
      const data = Object.entries(bytesTransmittedByPod)
      setGraphData(data)
     
      }
    }
  }


  useEffect(() =>{
    getData()
    // console.log('source1:', source, 'type:', type, 'data:', graphData)
  },[])

  useEffect(() => {
    getData()
    // console.log('source2:', source, 'type:', type, 'data:', graphData)
}, [type,source,namespace])


  return (
    <>
      <div>{source}{type}</div>
      {formattedData}
     <LineChart chartData={graphData} title={source} />
    </>
  )
}

export default HomeGraphCard