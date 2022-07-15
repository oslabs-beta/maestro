import React, { useCallback, useEffect, useState } from 'react'
import StatusCard from '../Components/StatusCard';
import StatusBubble from '../Components/StatusBubble';
import Tooltip from '@mui/material/Tooltip';
import { useAppSelector } from '../../state/hooks';



const StatusContainer = () => {
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace) 
  const [nodeQuant, setNodeQuant] = useState()
  const [deploymentQuant, setDeploymentQuant] = useState()
  const [podQuant, setPodQuant] = useState()
  const [servicesQuant, setServicesQuant] = useState()
  const [nodeBoxes, setNodeBoxes] = useState([])
  const [deploymentBoxes, setDeploymentBoxes] = useState([])
  const [podBoxes, setPodBoxes] = useState([])
  const [servicesBoxes, setServicesBoxes] = useState([])


  const getNodesForState = async (): Promise<any> => {
    let boxesArr =[];
    // returns array of objects, each object with name and conditions[{}]
    const nodesList: any = await window.electron.getNodesList();
    setNodeQuant(nodesList.length)
    for(let i =0; i < nodesList.length; i++){
      boxesArr.push(
      <StatusBubble 
        key={`node-bubble${i}`} 
        name={nodesList[i].name}
        status={nodesList[i].conditions}
      />)
    }
    setNodeBoxes(boxesArr)
    //set conditionals for background color based on status
  }

  const getDeploymentsForState = async (): Promise<any> => {
      let boxesArr =[];
      
      const deploymentsList: any = await window.electron.getDeploymentsList();
      const deploymentsListByNamespace = deploymentsList.filter((deployment: any) => {
        return deployment.namespace === namespace;
      })
      setDeploymentQuant(deploymentsListByNamespace.length)
      for(let i =0; i < deploymentsListByNamespace.length; i++){
          boxesArr.push(
          <StatusBubble
            key={`deployment-bubble${i}`} 
            name={deploymentsListByNamespace[i].name}
          />)
      }
      setDeploymentBoxes(boxesArr)
  }

  const getPodsForState = async (): Promise<any> => {
      let boxesArr =[];
      const podsList: any = await window.electron.getPodsList();
      const podsListByNamespace = podsList.filter((pod: any) => {
        return pod.namespace === namespace;
      })
      setPodQuant(podsListByNamespace.length)
      for(let i =0; i < podsListByNamespace.length; i++){
          boxesArr.push(<StatusBubble name={podsListByNamespace[i].name}/>)
      }
      setPodBoxes(boxesArr)
      //set conditionals for background color based on status
  }

  const getServicesForState = async (): Promise<any> => {
      let boxesArr =[];
      const servicesList: any = await window.electron.getServicesList();
      const servicesListByNamespace = servicesList.filter((service: any) => {
        return service.namespace === namespace;
      })
      setServicesQuant(servicesListByNamespace.length)
      for(let i =0; i < servicesListByNamespace.length; i++){
          boxesArr.push(<StatusBubble name={servicesListByNamespace[i].name}/>)
      }
      setServicesBoxes(boxesArr)
  }
  
  useEffect(() => {
      if (namespace === '') namespace = 'default'
      getNodesForState()
      getDeploymentsForState()
      getPodsForState()
      getServicesForState()
  }, [namespace])
  
  return (
  <div>
      <div className='bubble-container'>
        <StatusCard name={'Nodes'} quantity={nodeQuant} boxes={nodeBoxes} />
        <StatusCard name={'Deployments'} quantity={deploymentQuant}boxes={deploymentBoxes} />
        <StatusCard name={'Pods'} quantity={podQuant} boxes={podBoxes} />
        <StatusCard name={'Services'} quantity={servicesQuant} boxes={servicesBoxes}/>
      </div>
  </div>
  );
}

export default StatusContainer