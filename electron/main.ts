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
      nodeIntegration: true,
      //contextIsolation: false,
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
ipcMain.handle('getAlerts', async () => {
  const response = await fetch(`${prometheusURL}/rules`)
  const data:any = await response.json()
  const result = data.data.groups
  return result;  
})

ipcMain.handle('getEvents', async () => {
  const response:any =  await child_process.execSync('kubectl get events --all-namespaces',{ encoding: 'utf8'});
  return response;
})

ipcMain.handle('getNamespace', async () => {
  const response:any =  await child_process.execSync('kubectl get namespace', { encoding: 'utf8'});
  return response;
})