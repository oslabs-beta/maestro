
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
});
