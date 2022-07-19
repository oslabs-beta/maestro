
import { contextBridge, ipcRenderer } from 'electron';

// makes the functions from main.ts available in the frontend via context bridge
contextBridge.exposeInMainWorld('electron', {
  getAlerts: async () =>
    ipcRenderer.invoke('getAlerts'),
  getEvents: async () =>
    ipcRenderer.invoke('getEvents'),
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
    ipcRenderer.invoke('getNodesList'),
  getNamespacesList: async () => 
    ipcRenderer.invoke('getNamespacesList'),
  getDeploymentsList: async () => 
    ipcRenderer.invoke('getDeploymentsList'),
  getServicesList: async () => 
    ipcRenderer.invoke('getServicesList'),
  getPodsList: async () => 
    ipcRenderer.invoke('getPodsList'),
});
