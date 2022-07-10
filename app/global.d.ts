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
      getNodeList: ()=> Promise<any>;
      getServices: ()=> Promise<any>;
      getPods: ()=> Promise<any>;
      getDeployments: ()=> Promise<any>;
      // Add any additional "APIs" here
    };
  }
}