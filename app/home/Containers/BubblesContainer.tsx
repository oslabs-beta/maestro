import React, { useCallback, useEffect, useState } from 'react'
import StatusCard from '../Components/StatusCard';

const StatusContainer = () => {

    const [ nodeQuant, setNodeQuant ] = useState()
    const [ deploymentQuant, setDeploymentQuant ] = useState()
    const [ podQuant, setPodQuant ] = useState()
    const [ servicesQuant, setServicesQuant ] = useState()

    const getNodesForState = async (): Promise<any> => {
        const nodes: any = await window.electron.getNodeList();
        setNodeQuant(nodes.length)
      }

    const getDeploymentsForState = async (): Promise<any> => {
        const deployments: any = await window.electron.getDeployments();
        setDeploymentQuant(deployments.length)
    }

    const getPodsForState = async (): Promise<any> => {
        const pods: any = await window.electron.getPods();
        setPodQuant(pods.length)
    }

    const getServicesForState = async (): Promise<any> => {
        const services: any = await window.electron.getServices();
        setServicesQuant(services.length)
    }
    
   useEffect(() => {
       getNodesForState()
       getDeploymentsForState()
       getPodsForState()
       getServicesForState()
   }, [])
   
   return (
    <div>
       <div className='status-container'>
        <StatusCard name={'Nodes'} quantity={nodeQuant}/>
        <StatusCard name={'Deployments'} quantity={deploymentQuant}/>
        <StatusCard name={'Pods'} quantity={podQuant}/>
        <StatusCard name={'Services'} quantity={servicesQuant}/>
       </div>
    </div>
   );
}

export default StatusContainer