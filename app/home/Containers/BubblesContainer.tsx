import React, { useCallback, useEffect, useState } from 'react'
import StatusCard from '../Components/StatusCard';
import StatusBubble from '../Components/StatusBubble';
import Tooltip from '@mui/material/Tooltip';


const StatusContainer = () => {

    const [ nodeQuant, setNodeQuant ] = useState()
    const [ deploymentQuant, setDeploymentQuant ] = useState()
    const [ podQuant, setPodQuant ] = useState()
    const [ servicesQuant, setServicesQuant ] = useState()
    const [nodeBoxes, setNodeBoxes] = useState([])
    const [deploymentBoxes, setDeploymentBoxes] = useState([])
    const [podBoxes, setPodBoxes] = useState([])
    const [servicesBoxes, setServicesBoxes] = useState([])
    const [nodeName, setNodeName] = useState([])
    const [deploymentName, setDeploymentName] = useState([])
    const [podName, setPodName] = useState([])
    const [servicesName, setServicesName] = useState([])

    

    const getNodesForState = async (): Promise<any> => {
        let boxesArr =[];
        const nodes: any = await window.electron.getNodeList();
        setNodeName(nodes)
        setNodeQuant(nodes.length)
        for(let i =0; i < nodes.length; i++){
            boxesArr.push(<StatusBubble name={nodes[i]}/>)
        }
        setNodeBoxes(boxesArr)
       
        //set conditionals for background color based on status
      }

    const getDeploymentsForState = async (): Promise<any> => {
        let boxesArr =[];
        const deployments: any = await window.electron.getDeployments();
        setDeploymentName(deployments)
        setDeploymentQuant(deployments.length)
        for(let i =0; i < deployments.length; i++){
            boxesArr.push(<StatusBubble name={deployments[i]}/>)
        }
        setDeploymentBoxes(boxesArr)
    }

    const getPodsForState = async (): Promise<any> => {
        let boxesArr =[];
        const pods: any = await window.electron.getPods();
        setPodName(pods)
        setPodQuant(pods.length)
        for(let i =0; i < pods.length; i++){
            boxesArr.push(<StatusBubble name={pods[i]}/>)
        }
        setPodBoxes(boxesArr)
    }

    const getServicesForState = async (): Promise<any> => {
        let boxesArr =[];
        const services: any = await window.electron.getServices();
        setServicesName(services)
        setServicesQuant(services.length)
        for(let i =0; i < services.length; i++){
            boxesArr.push(<StatusBubble name={services[i]}/>)
        }
        setServicesBoxes(boxesArr)
    }
    
   useEffect(() => {
       getNodesForState()
       getDeploymentsForState()
       getPodsForState()
       getServicesForState()
   }, [])
   
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