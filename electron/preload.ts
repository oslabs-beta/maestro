
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  getAlerts: async () =>
    ipcRenderer.invoke('getAlerts'),
  getStats: async () =>
    ipcRenderer.invoke('getEvents'),
  getNamespace: async () =>
    ipcRenderer.invoke('getNamespace'),
});
