import { setMaxListeners } from 'process';
import React, { useEffect, useState } from 'react';
import { setConstantValue } from 'typescript';

// const [deployments, setDeployments] = useState([])
const renderThis= async (): Promise<any> => {
    // Use IPC API to query Electron's main thread and run this method
    // const alerts = await window.electron.getAlerts();
    // const events = await window.electron.getEvents();
    // const namespaces = await window.electron.getNamespaces();
    // const node = await window.electron.getNodeList();
    // const services = await window.electron.getServices();
    // const pods = await window.electron.getPods();
    // const deployments = await window.electron.getDeployments();
    const cpuUsagePerNode = await window.electron.getCPUUsageByNode()


    // console.log("alerts", alerts)
    // console.log("events", events)
    // console.log("namespaces", namespaces)
    // console.log("node", node)
    // console.log("services", services)
    // console.log("pods", pods)
    // console.log("deployments", deployments)
    console.log('cpuUsagePerNode', cpuUsagePerNode)
    // setDeployments(cpuUsage)
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