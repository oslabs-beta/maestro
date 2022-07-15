
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  getAlerts: async () =>
    ipcRenderer.invoke('getAlerts'),
  getEvents: async () =>
    ipcRenderer.invoke('getEvents'),
  getNamespaces: async () =>
    ipcRenderer.invoke('getNamespaces'),
  getNodeList: async () =>
    ipcRenderer.invoke('getNodeList'),
  getServices: async () =>
    ipcRenderer.invoke('getServices'),
  getPods: async () =>
    ipcRenderer.invoke('getPods'),
  getDeployments: async () =>
    ipcRenderer.invoke('getDeployments'),
  getCPUUsageByNode: async (namespace: string) => 
    ipcRenderer.invoke('getCPUUsageByNode', namespace),
  getMemoryUsageByNode: async (namespace: string) => 
    ipcRenderer.invoke('getMemoryUsageByNode', namespace),
  bytesRecievedByNode: async (namespace: string) => 
    ipcRenderer.invoke('bytesRecievedByNode', namespace),
  bytesTransmittedByNode: async (namespace: string) => 
    ipcRenderer.invoke('bytesTransmittedByNode', namespace),
  getCPUUsageByNamespace: async (namespace: string) => 
    ipcRenderer.invoke('getCPUUsageByNamespace', namespace),
  getMemoryUsageByNamespace: async (namespace: string) => 
    ipcRenderer.invoke('getMemoryUsageByNamespace', namespace),
  bytesRecievedByNamespace: async (namespace: string) => 
    ipcRenderer.invoke('bytesRecievedByNamespace', namespace),
  bytesTransmittedByNamespace: async (namespace: string) => 
    ipcRenderer.invoke('bytesTransmittedByNamespace', namespace),
  getCPUUsageByPod: async (namespace: string) => 
    ipcRenderer.invoke('getCPUUsageByPod', namespace),
  getMemoryUsageByPod: async (namespace: string) => 
    ipcRenderer.invoke('getMemoryUsageByPod', namespace),
  bytesRecievedByPod: async (namespace: string) => 
    ipcRenderer.invoke('bytesRecievedByPod', namespace),
  bytesTransmittedByPod: async (namespace: string) => 
    ipcRenderer.invoke('bytesTransmittedByPod', namespace),
  getNodesList: async () => 
    ipcRenderer.invoke('getNodesList')
});
