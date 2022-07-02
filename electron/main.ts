import { app, BrowserWindow, ipcMain } from 'electron';
// import electronReload from 'electron-reload';
// import path from 'path';

// require('electron-reload')(__dirname);

let mainWindow: BrowserWindow;

app.on("ready", createWindow);

function createWindow (): void {
  mainWindow = new BrowserWindow({
    width:800,
    height:700,
    // show: false,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation: false,
      // preload: __dirname + "/preload.js"
  }
  })
  mainWindow.loadURL('http://localhost:8080/');
  //mainWindow.loadFile("./app/index.html");
  mainWindow.on("ready-to-show", () => mainWindow.show());
}