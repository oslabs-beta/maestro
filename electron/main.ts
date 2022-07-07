import { app, BrowserWindow, ipcMain, protocol } from 'electron';
const fetch:any = (...args:any) =>
  import('node-fetch').then(({ default: fetch }:any) => fetch(...args));
import * as child_process from 'child_process'; 

const prometheusURL = 'http://127.0.0.1:9090/api/v1/';

// import electronReload from 'electron-reload';
import path from 'path';

//require('electron-reload')(__dirname);

let mainWindow: BrowserWindow;

app.on("ready", createWindow);

function createWindow (): void {
  mainWindow = new BrowserWindow({
    width:800,
    height:700,
    // show: false,
    webPreferences:{
      preload: __dirname + "/preload.js"
  }
  })
  mainWindow.loadURL('http://localhost:8080/');
  mainWindow.webContents.openDevTools()
  mainWindow.on("ready-to-show", () => mainWindow.show());
}

// closes electron on mac devices
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// TO DO: add error handling to fetch request
// TO DO: Type data/responses
//functions 

// fetch alerts from Prometheus for Alerts page
ipcMain.handle('getAlerts', async () => {
  try {
    const response = await fetch(`${prometheusURL}/rules`);
    const data:any = await response.json();
    const formattedAlerts = formatAlerts(data);
    return formattedAlerts;  
  } catch (err) {
    console.log(`Error in 'getAlerts' function: ERROR: ${err}`);
  }
})

const formatAlerts = (data:any) => {
  const groups = data.data.groups;
  const tableData = [];
  for (let group of groups) {
    for (let rule of group.rules) {
      if (rule.state) {
        const ruleObj = {
          group: group.name,
          state: rule.state,
          name: rule.name,
          severity: rule.labels?.severity,
          description: rule?.annotations.description,
          summary: rule?.annotations.summary,
          alerts: rule.alerts,
        };
        tableData.push(ruleObj);
      }
    }
  }
  return tableData;
};

ipcMain.handle('getEvents', async () => {
  const response:any = await child_process.execSync('kubectl get events --all-namespaces',{ encoding: 'utf8'});
  const data = response.split('\n');
  const formattedEvents = formatEvents(data);
  return formattedEvents;
})

type Event = [{
  'namespace': string,
  'last_seen': string,
  'type': string,
  'reason': string,
  'object': string,
  'message': string
}]

const formatEvents = (arr: string[]) => {
  arr.pop();
  const trimmed: string[][] = arr.map((el: string) => el.split(/[ ]{2,}/));
  const headers: string[] = trimmed[0].map((el) => el.toLowerCase().replace(' ', '_'));
  trimmed.shift();
  return trimmed.map((row: string[]) => {
    let obj: {} = {};
    row.forEach((r: string, i:number) => {
      (obj as any)[headers[i]] = row[i];
    });
    return obj;
  });
};

ipcMain.handle('getNamespaces', async () => {
  const response:any = await child_process.execSync('kubectl get namespace', { encoding: 'utf8'});
  const formattedNamespaces = formatNamespaces(response)
  return formattedNamespaces;
})

const formatNamespaces = (data:any) => {
  const array = data
    .split(" ")
    .filter((el :string) => {
    return el !== '';
    })
    .filter((el :string, i :number) => {
      return i % 2 === 0;
    })
  array.shift();
  array.pop();
  return array.reduce((acc: string[], el:string) => {
    acc.push(el.substring(el.indexOf("\n") + 1, el.length));
    return acc;
  }, [])
}


// NEW CODE
ipcMain.handle('getNodeList', async () => {
  //all namespaces --all-namespaces otherwise goes to default
  //specific namespace kubesctl get nodes -n kube-node-lease

  const response:any = child_process.execSync('kubectl get nodes', { encoding: 'utf8'});
  const formattedNodeList = [response.split(' ').filter((el: string) => el !== '').slice(4, 5)[0].substring(8)]
  return formattedNodeList;

  //FOR USING K8S
  // let nodeArr;
  // let nodeStat;
//   k8sApiCore
// 			.listNode('default')
// 			.then((data) => {
//  //   nodeArr = nodeList//.body.items[0].metadata.name;
// 				// res.locals.nodeList = data;
//         // console.log(data)
// 				k8sApiCore
// 					.listComponentStatus()
// 					.then((data) => {
//             // console.log(data,"HERE")
//             console.log(data.body.items.length)
//             // nodeStat.push(nodes.body.items[1].conditions[0].type)
// 						// res.locals.nodeList.nodeProcesses = data;
// 						// return next();
// 					})
//         })

  
  // return nodeArr;
})

//services from all namespaces
ipcMain.handle('getServices', async (namespace) => {
  // if(!namespace){
    const response:any =  child_process.execSync('kubectl get services --all-namespaces', { encoding: 'utf8'});
    const formattedServices = response.split(' ').filter((el: string) => el !== '').slice(7).filter((el: string, i: number) => i % 6 === 0)
    return formattedServices;
  // }
  // else{
  //   const response:any =  child_process.execSync(`kubectl get services -n ${namespace} `, { encoding: 'utf8'});
  // return response;
  // }
  
})

ipcMain.handle('getPods', async (namespace) => {
  //services from all namespaces
  // if(namespace){
  //   const response:any =  child_process.execSync(`kubectl get pods -n ${namespace} `, { encoding: 'utf8'});
  // return response;
  // }
  // else{
    const response:any =  child_process.execSync('kubectl get pods --all-namespaces', { encoding: 'utf8'});
    const formattedPods = response.split(' ').filter((el :string) => el !== '').slice(6).filter((el: string, i: number) => i % 7 === 0)
    return formattedPods;
  // }
  
})

ipcMain.handle('getDeployments', async (namespace) => {
  //services from all namespaces
  // if(namespace){
  //   const response:any =  child_process.execSync(`kubectl get deployments -n ${namespace} `, { encoding: 'utf8'});
  // return response;
  // }
  // else{
    const response:any =  child_process.execSync('kubectl get deployments --all-namespaces', { encoding: 'utf8'});
    const formattedDeployments = response.split(" ").filter((el :string) => el !== '' && el !== '1' && el !== '1/1').slice(6).filter((el: string, i: number) => i % 2 === 0)
    return formattedDeployments;
  // }
  
})
