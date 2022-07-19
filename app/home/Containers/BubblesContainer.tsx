import React, { useEffect, useState } from 'react';
import StatusCard from '../Components/StatusCard';
import StatusBubble from '../Components/StatusBubble';
import { useAppSelector } from '../../state/hooks';

const StatusContainer = () => {
  let namespace: string = useAppSelector(state => state.namespace.currentNamespace);
  const [nodeQuant, setNodeQuant] = useState();
  const [deploymentQuant, setDeploymentQuant] = useState();
  const [podQuant, setPodQuant] = useState();
  const [servicesQuant, setServicesQuant] = useState();
  const [nodeBoxes, setNodeBoxes] = useState([]);
  const [deploymentBoxes, setDeploymentBoxes] = useState([]);
  const [podBoxes, setPodBoxes] = useState([]);
  const [servicesBoxes, setServicesBoxes] = useState([]);

  const getNodesForState = async (): Promise<any> => {
    const nodesList: any = await window.electron.getNodesList();
    setNodeQuant(nodesList.length);
    
    let boxesArr =[];
    for(let i =0; i < nodesList.length; i++){
      boxesArr.push(
        <StatusBubble 
          key={`node-bubble${i}`} 
          type = {'nodes'}
          name={nodesList[i].name}
          status={nodesList[i].conditions}
        />
      );
    }
    setNodeBoxes(boxesArr);
  }

  const getDeploymentsForState = async (): Promise<any> => {
    const deploymentsList: any = await window.electron.getDeploymentsList();
    const deploymentsListByNamespace = deploymentsList.filter((deployment: any) => {
      return deployment.namespace === namespace;
    })
    setDeploymentQuant(deploymentsListByNamespace.length);
    
    let boxesArr =[];
    for(let i =0; i < deploymentsListByNamespace.length; i++){
      boxesArr.push(
        <StatusBubble
          key={`deployment-bubble${i}`} 
          type = {'deployments'}
          name={deploymentsListByNamespace[i].name}
        />
      );
    }
    setDeploymentBoxes(boxesArr);
  }

  const getPodsForState = async (): Promise<any> => {
    const podsList: any = await window.electron.getPodsList();
    const podsListByNamespace = podsList.filter((pod: any) => {
      return pod.namespace === namespace;
    })

    let boxesArr =[];
    setPodQuant(podsListByNamespace.length);
    for(let i =0; i < podsListByNamespace.length; i++){
      boxesArr.push(
        <StatusBubble
          key={`pod-bubble${i}`}
          type={'pods'} 
          name={podsListByNamespace[i].name} 
          status={podsListByNamespace[i].status}
        />
      );
    }
    setPodBoxes(boxesArr);
  }

  const getServicesForState = async (): Promise<any> => {
    const servicesList: any = await window.electron.getServicesList();
    const servicesListByNamespace = servicesList.filter((service: any) => {
      return service.namespace === namespace;
    })

    let boxesArr =[];
    setServicesQuant(servicesListByNamespace.length);
    for(let i =0; i < servicesListByNamespace.length; i++){
      boxesArr.push(
        <StatusBubble
          key={`services-bubble${i}`} 
          type={'services'} 
          name={servicesListByNamespace[i].name}
        />
      );
    }
    setServicesBoxes(boxesArr);
  }
  
  useEffect(() => {
    if (namespace === '') namespace = 'default';
    getNodesForState();
    getDeploymentsForState();
    getPodsForState();
    getServicesForState();
  }, [namespace]);
  
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

export default StatusContainer;