/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../state/hooks';
import LineChart from './LineChartTemplate';

interface HomeGraphCardType {
  type: any,
  source: any,
}

function HomeGraphCard({ type, source }: HomeGraphCardType): JSX.Element {
  const [graphData, setGraphData] = useState([]);
  let namespace: string = useAppSelector((state) => state.namespace.currentNamespace);

  // conditional rendering based on type and source options
  const getData = async (): Promise<any> => {
    if (!namespace) namespace = 'default';

    // namespace metrics
    if (source === 'Namespace') {
      if (type === 'Memory') {
        const getMemoryUsageByNamespace = await window.electron.getMemoryUsageByNamespace(namespace);
        const data = Object.entries(getMemoryUsageByNamespace);
        setGraphData(data);
      } else if (type === 'CPU') {
        const getCPUUsageByNamespace = await window.electron.getCPUUsageByNamespace(namespace);
        const data = Object.entries(getCPUUsageByNamespace);
        setGraphData(data);
      } else if (type === 'Bytes') {
        const bytesRecievedByNamespace = await window.electron.bytesRecievedByNamespace(namespace);
        const data = Object.entries(bytesRecievedByNamespace);
        setGraphData(data);
      }
    } else if (source === 'Nodes') {
      if (type === 'Memory') {
        const getMemoryUsageByNode = await window.electron.getMemoryUsageByNode(namespace);
        const data = Object.entries(getMemoryUsageByNode);
        setGraphData(data);
      } else if (type === 'CPU') {
        const getCPUUsageByNode = await window.electron.getCPUUsageByNode(namespace);
        const data = Object.entries(getCPUUsageByNode);
        setGraphData(data);
      } else if (type === 'Bytes') {
        const bytesRecievedByNode = await window.electron.bytesTransmittedByNode(namespace);
        const data = Object.entries(bytesRecievedByNode);
        setGraphData(data);
      }
    } else if (source === 'Pods') {
      if (type === 'Memory') {
        const getMemoryUsageByPod = await window.electron.getMemoryUsageByPod(namespace);
        const data = Object.entries(getMemoryUsageByPod);
        setGraphData(data);
      } else if (type === 'CPU') {
        const getCPUUsageByPod = await window.electron.getCPUUsageByPod(namespace);
        const data = Object.entries(getCPUUsageByPod);
        setGraphData(data);
      } else if (type === 'Bytes') {
        const bytesRecievedByPod = await window.electron.bytesRecievedByPod(namespace);
        const data = Object.entries(bytesRecievedByPod);
        setGraphData(data);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [type, source, namespace]);

  return (
    <>
      <div className="graph-card-title">
        {`${type[0].toUpperCase() + type.slice(1)} Usage by ${source}`}
      </div>
      <LineChart
        chartData={graphData}
      />
    </>
  );
}

export default HomeGraphCard;
