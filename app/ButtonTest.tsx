import { WindowOutlined } from '@mui/icons-material';
import { ipcRenderer } from 'electron/renderer';
import { setMaxListeners } from 'process';
import React, { useEffect, useState } from 'react';
import { setConstantValue } from 'typescript';

// const [deployments, setDeployments] = useState([])
const renderThis= async (): Promise<any> => {
    // Use IPC API to query Electron's main thread and run this method
    // const alerts = await window.electron.getAlerts();
    // const events = await window.electron.getEvents();
    const nodesList = await window.electron.getNodesList()
    const namespaceList = await window.electron.getNamespacesList()
    const deploymentList = await window.electron.getDeploymentsList()
    const servicesList = await window.electron.getServicesList()
    const podsList = await window.electron.getPodsList()

    // const componentStatus = await window.electron.getComponentStatus()

    // const namespaces = await window.electron.getNamespaces();
    // const node = await window.electron.getNodes();
    // const services = await window.electron.getServices();
    // const pods = await window.electron.getPods();
    // const deployments = await window.electron.getDeployments();
    // const getCPUUsageByNode = await window.electron.getCPUUsageByNode('default')
    // const getMemoryUsageByNode = await window.electron.getMemoryUsageByNode('default')
    // const bytesRecievedByNode = await window.electron.bytesTransmittedByNode('default')
    // const bytesTransmittedByNode = await window.electron.bytesTransmittedByNode('default')
    // const getCPUUsageByNamespace = await window.electron.getCPUUsageByNamespace('default')
    // const getMemoryUsageByNamespace = await window.electron.getMemoryUsageByNamespace('default')
    // const bytesRecievedByNamespace = await window.electron.bytesRecievedByNamespace('default')
    // const bytesTransmittedByNamespace = await window.electron.bytesTransmittedByNamespace('default')
    // const getCPUUsageByPod = await  window.electron.getCPUUsageByPod('default')
    // const getMemoryUsageByPod = await window.electron.getMemoryUsageByPod('default')
    // const bytesRecievedByPod = await window.electron.bytesRecievedByPod('default')
    // const bytesTransmittedByPod = await window.electron.bytesTransmittedByPod('default')
    console.log('nodeslist', JSON.parse(nodesList))
    console.log('namespaceList', JSON.parse(namespaceList))
    console.log('deploymentList', JSON.parse(deploymentList))
    console.log('servicestList', JSON.parse(servicesList))
    console.log('podsList', JSON.parse(podsList))

    // console.log('events', events)
    // console.log('getCPUUsageByNode', getCPUUsageByNode)
    // console.log('getMemoryUsageByNode', getMemoryUsageByNode)
    // console.log('bytesRecievedByNode', bytesRecievedByNode)
    // console.log('bytesTransmittedByNode', bytesTransmittedByNode)
    // console.log('getCPUUsageByNamespace', getCPUUsageByNamespace)
    // console.log('getMemoryUsageByNamespace', getMemoryUsageByNamespace)
    // console.log('bytesRecievedByNamespace', bytesRecievedByNamespace)
    // console.log('bytesTransmittedByNamespace', bytesTransmittedByNamespace)
    // console.log('getCPUUsageByPod', getCPUUsageByPod)
    // console.log('getMemoryUsageByPod', getMemoryUsageByPod)
    // console.log('bytesRecievedByPod', bytesRecievedByPod)
    // console.log('bytesTransmittedByPod', bytesTransmittedByPod)


    // console.log("alerts", alerts)
    // console.log("events", events)
    // console.log("namespaces", namespaces)
    // console.log("node", node)
    // console.log("services", services)
    // console.log("pods", pods)
    // console.log("deployments", deployments)


  }

const ButtonTest = (): JSX.Element => {
    useEffect(() => {
        renderThis()
    }, [])
    // console.log(deployments)
    return (
        <>
            <button onClick={renderThis}>show me a button</button>
        </>
    );
};

export default ButtonTest;

// 1657296473.693, '7980908544'