import React, { useCallback, useEffect, useState } from 'react'
import SummaryDataCard from '../Components/SummaryDataCard';



const SummaryDataContainer = () => {

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
       <div className='summary-data-container'>
        <SummaryDataCard name={'Nodes'} quantity={nodeQuant}/>
        <SummaryDataCard name={'Deployments'} quantity={deploymentQuant}/>
        <SummaryDataCard name={'Pods'} quantity={podQuant}/>
        <SummaryDataCard name={'Services'} quantity={servicesQuant}/>
       </div>

   );
}

export default SummaryDataContainer