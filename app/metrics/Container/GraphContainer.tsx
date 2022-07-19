/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import LineChart from '../../home/Components/LineChartTemplate';

function GraphContainer() {
  const [memoryUsageByNode, setMemoryUsageByNode] = useState([]);
  const [memoryUsageByNamespace, setMemoryUsageByNamespace] = useState([]);
  const [memoryUsageByPod, setMemoryUsageByPod] = useState([]);
  const [cpuUsageByNode, setCpuUsageByNode] = useState([]);
  const [cpuUsageByNamespace, setCpuUsageByNamespace] = useState([]);
  const [cpuUsageByPod, setCpuUsageByPod] = useState([]);
  const [bytesRecievedByNode, setBytesRecievedByNode] = useState([]);
  const [bytesRecievedByNamespace, setBytesRecievedByNamespace] = useState([]);
  const [bytesRecievedByPod, setBytesRecievedByPod] = useState([]);
  const [bytesTransmittedByNamespace, setBytesTransmittedByNamespace] = useState([]);
  const [bytesTransmittedByNode, setBytesTransmittedByNode] = useState([]);
  const [bytesTransmittedByPod, setBytesTransmittedByPod] = useState([]);

  const setStateForData = async (namespace = 'default') => {
    const getCPUUsageByNode = await window.electron.getCPUUsageByNode(namespace);
    const getMemoryUsageByNode = await window.electron.getMemoryUsageByNode(namespace);
    const getbytesRecievedByNode = await window.electron.bytesRecievedByNode(namespace);
    const getbytesTransmittedByNode = await window.electron.bytesTransmittedByNode(namespace);
    const getCPUUsageByNamespace = await window.electron.getCPUUsageByNamespace(namespace);
    const getMemoryUsageByNamespace = await window.electron.getMemoryUsageByNamespace(namespace);
    const getbytesRecievedByNamespace = await window.electron.bytesRecievedByNamespace(namespace);
    const getbytesTransmittedByNamespace = await window.electron.bytesTransmittedByNamespace(namespace);
    const getCPUUsageByPod = await window.electron.getCPUUsageByPod(namespace);
    const getMemoryUsageByPod = await window.electron.getMemoryUsageByPod(namespace);
    const getbytesRecievedByPod = await window.electron.bytesRecievedByPod(namespace);
    const getbytesTransmittedByPod = await window.electron.bytesTransmittedByPod(namespace);

    setCpuUsageByNode(Object.entries(getCPUUsageByNode));
    setMemoryUsageByNode(Object.entries(getMemoryUsageByNode));
    setBytesRecievedByNode(Object.entries(getbytesRecievedByNode));
    setBytesTransmittedByNode(Object.entries(getbytesTransmittedByNode));
    setCpuUsageByNamespace(Object.entries(getCPUUsageByNamespace));
    setMemoryUsageByNamespace(Object.entries(getMemoryUsageByNamespace));
    setBytesRecievedByNamespace(Object.entries(getbytesRecievedByNamespace));
    setBytesTransmittedByNamespace(Object.entries(getbytesTransmittedByNamespace));
    setCpuUsageByPod(Object.entries(getCPUUsageByPod));
    setMemoryUsageByPod(Object.entries(getMemoryUsageByPod));
    setBytesRecievedByPod(Object.entries(getbytesRecievedByPod));
    setBytesTransmittedByPod(Object.entries(getbytesTransmittedByPod));
  };

  useEffect(() => {
    setStateForData();
  }, []);

  return (
    <div className="graph-container">
      <div className="graph-card">
        <div className="graph-card-title">
          CPU Usage by Node
        </div>
        <LineChart chartData={cpuUsageByNode} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Memory Usage by Node
        </div>
        <LineChart chartData={memoryUsageByNode} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Received by Node
        </div>
        <LineChart chartData={bytesRecievedByNode} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Transmitted by Node
        </div>
        <LineChart chartData={bytesTransmittedByNode} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          CPU Usage by Namespace
        </div>
        <LineChart chartData={cpuUsageByNamespace} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Memory Usage by Namespace
        </div>
        <LineChart chartData={memoryUsageByNamespace} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Received by Namespace
        </div>
        <LineChart chartData={bytesRecievedByNamespace} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Transmitted by Namespace
        </div>
        <LineChart chartData={bytesTransmittedByNamespace} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          CPU Usage by Pod
        </div>
        <LineChart chartData={cpuUsageByPod} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Memory Usage by Pod
        </div>
        <LineChart chartData={memoryUsageByPod} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Received by Pod
        </div>
        <LineChart chartData={bytesRecievedByPod} />
      </div>
      <div className="graph-card">
        <div className="graph-card-title">
          Bytes Transmitted by Pod
        </div>
        <LineChart chartData={bytesTransmittedByPod} />
      </div>
    </div>
  );
}

export default GraphContainer;
