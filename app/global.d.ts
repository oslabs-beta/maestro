import { fetchData } from './types';
declare global {
  /**
   * We define all IPC APIs here to give devs auto-complete
   * use window.electron anywhere in app
   * Also note the capital "Window" here
   */
  interface Window {
    electron: {
      getAlerts: () => Promise<fetchData>;
      getEvents: () => Promise<any>;
      getNamespaces: () => Promise<any>;
      getNodes: () => Promise<any>;
      getServices: () => Promise<any>;
      getPods: () => Promise<any>;
      getDeployments: () => Promise<any>;
      getCPUUsageByNode: (namespace: string) => Promise<any>
      getMemoryUsageByNode: (namespace: string) => Promise<any>
      bytesRecievedByNode: (namespace: string) => Promise<any>
      bytesTransmittedByNode: (namespace: string) => Promise<any>
      getCPUUsageByNamespace: (namespace: string) => Promise<any>
      getMemoryUsageByNamespace: (namespace: string) => Promise<any>
      bytesRecievedByNamespace: (namespace: string) => Promise<any>
      bytesTransmittedByNamespace: (namespace: string) => Promise<any>
      getCPUUsageByPod: (namespace: string) => Promise<any>
      getMemoryUsageByPod: (namespace: string) => Promise<any>
      bytesRecievedByPod: (namespace: string) => Promise<any>
      bytesTransmittedByPod: (namespace: string) => Promise<any>
      getNodesList: () => Promise<any>
      getNamespacesList: () => Promise<any>
      getDeploymentsList: () => Promise<any>
      getServicesList: () => Promise<any>
      getPodsList: () => Promise<any>
      getComponentStatus: () => Promise<any>
      // Add any additional "APIs" here
    };
  }
}