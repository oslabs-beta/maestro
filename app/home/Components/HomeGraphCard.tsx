import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../state/hooks';

interface HomeGraphCard {
  type?: any,
  source?: any,
}

const HomeGraphCard = ({ type, source}: HomeGraphCard): JSX.Element => {
  const [graphData, setGraphData] = useState([])
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace) 
 
//conditional rendering based on type and source options

//
const getData = async (): Promise<any> =>{
  if(!namespace) namespace='default'
  console.log(namespace, 'namespace')

  //namespace
  if(source === 'Namespace'){
    if(type === 'Memory'){
      console.log(source, type)
      // const getMemoryUsageByNamespace:any = await window.electron.getMemoryUsageByNamespace(namespace)
      // setGraphData(getMemoryUsageByNamespace)
     
      

    }else if(type === 'CPU'){
      console.log(source, type)
      // const getCPUUsageByNamespace = await window.electron.getCPUUsageByNamespace(namespace)
      // setGraphData(getCPUUsageByNamespace)
      
      

    }else if(type === 'Bytes'){
      console.log(source, type)
      // const bytesRecievedByNamespace = await window.electron.bytesRecievedByNamespace(namespace)
      // const bytesTransmittedByNamespace = await window.electron.bytesTransmittedByNamespace(namespace)
      // setGraphData(bytesRecievedByNamespace)
      
    }
  }

  //node
  else if(source === 'Nodes'){
    if(type === 'Memory'){
      console.log(source, type)
     const getMemoryUsageByNode = await window.electron.getMemoryUsageByNode(namespace)
      setGraphData(getMemoryUsageByNode)
      

    }else if(type === 'CPU'){
      console.log(source, type)
      const getCPUUsageByNode = await window.electron.getCPUUsageByNode(namespace)
      setGraphData(getCPUUsageByNode)
     

    }else if(type === 'Bytes'){
      console.log(source, type)
      const bytesRecievedByNode = await window.electron.bytesTransmittedByNode(namespace)
      const bytesTransmittedByNode = await window.electron.bytesTransmittedByNode(namespace)
      setGraphData(bytesRecievedByNode)
      

    }
  }

  //pods
  else if(source === 'Pods'){
    if(type === 'Memory'){
      console.log(source, type)
      const getMemoryUsageByPod = await window.electron.getMemoryUsageByPod(namespace)
      setGraphData(getMemoryUsageByPod)
      

    }else if(type === 'CPU'){
      console.log(source, type)
      const getCPUUsageByPod = await  window.electron.getCPUUsageByPod(namespace)
      setGraphData(getCPUUsageByPod)
      

    }else if(type === 'Bytes'){
      console.log(source, type)
      const bytesRecievedByPod = await window.electron.bytesRecievedByPod(namespace)
      const bytesTransmittedByPod = await window.electron.bytesTransmittedByPod(namespace)
      setGraphData(bytesRecievedByPod)
     
    }
  }
  
}
useEffect(() =>{
  console.log('fire Here')
  getData()
  console.log('source:', source, 'type:', type, 'data:', graphData)
},[])
useEffect(() => {
  console.log('fire')
  getData()
  console.log('source:', source, 'type:', type, 'data:', graphData)
 
}, [type,source,namespace])

  return (
    <div>{source}{type}</div>
  )
}

export default HomeGraphCard