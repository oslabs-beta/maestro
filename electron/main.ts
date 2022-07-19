import { app, BrowserWindow, ipcMain } from "electron";
const fetch: any = (...args: any) =>
  import("node-fetch").then(({ default: fetch }: any) => fetch(...args));
import * as child_process from "child_process";
import { getStartAndEndDateTime } from "./utils";
import { fetchMetricsData } from "./dataController/getData/getMatrixData";
import { formatk8sApiData } from "./dataController/formatData/formatk8sApiData";
import { formatAlerts } from "./dataController/formatData/formatAlerts";
import { formatEvents } from "./dataController/formatData/formatEvents";
import * as k8s from '@kubernetes/client-node';
// K8s API
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApiCore = kc.makeApiClient(k8s.CoreV1Api);
const k8sApiApps = kc.makeApiClient(k8s.AppsV1Api);

const prometheusURL = "http://127.0.0.1:9090/api/v1/";

let mainWindow: BrowserWindow;

app.on("ready", createWindow);

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      preload: __dirname + "/preload.js",
    },
  });
  mainWindow.loadURL("http://localhost:8080/");
  mainWindow.webContents.openDevTools();
  mainWindow.on("ready-to-show", () => mainWindow.show());
}

// closes electron on mac devices
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// TO DO: Type data/responses

ipcMain.handle('getNodesList', async () => {
  try {
    const data = await k8sApiCore.listNode('default')
    return formatk8sApiData(data.body) 
  }
  catch (err) {
    console.log(`Error in 'getNodesList' function: ERROR: ${err}`);
  }
});

ipcMain.handle('getNamespacesList', async () => {
  try {
    const data = await k8sApiCore.listNamespace()
    const namespaces: string[] = [];
    data.body.items.forEach((namespace) => namespaces.push(namespace.metadata.name))
    return namespaces;
  }
  catch (err) {
    console.log(`Error in 'getNamespacesList' function: ERROR: ${err}`);
  }
});

ipcMain.handle('getDeploymentsList', async () => {
  try {
    const data = await k8sApiApps.listDeploymentForAllNamespaces()
    return formatk8sApiData(data.body)
  }
  catch (err) {
    console.log(`Error in 'getDeploymentsList' function: ERROR: ${err}`);
  }
});

ipcMain.handle('getServicesList', async () => {
  try {
    const data = await k8sApiCore.listServiceForAllNamespaces()
    return formatk8sApiData(data.body)
  }
  catch (err) {
    console.log(`Error in 'getServicesList' function: ERROR: ${err}`);
  }
});

ipcMain.handle('getPodsList', async () => {
  try {
    const data = await k8sApiCore.listPodForAllNamespaces()
    return formatk8sApiData(data.body)
  }
  catch (err) {
    console.log(`Error in 'getPodsList' function: ERROR: ${err}`);
  }
});

ipcMain.handle('getComponentStatus', async () => {
  try {
    const data = await k8sApiCore.listComponentStatus()
    return data.body
  }
  catch (err) {
    console.log(`Error in 'getComponentStatus' function: ERROR: ${err}`);
  }
})

// fetch alerts from Prometheus for Alerts page
ipcMain.handle("getAlerts", async () => {
  try {
    const response = await fetch(`${prometheusURL}/rules`);
    const data: any = await response.json();
    const formattedAlerts = formatAlerts(data);
    return formattedAlerts;
  } 
  catch (err) {
    console.log(`Error in 'getAlerts' function: ERROR: ${err}`);
  }
});

ipcMain.handle("getEvents", () => {
  try {
    const response: any = child_process.execSync("kubectl get events --all-namespaces", { encoding: "utf8" });
    const data = response.split("\n");
    const formattedEvents = formatEvents(data);
    return formattedEvents;
  }
  catch (err) {
    console.log(`Error in 'getEvents' function: ERROR: ${err}`);
  }
});

//Namespace
//get cpu usage by namespace (%)
ipcMain.handle("getCPUUsageByNamespace", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const namespaceStr = namespace && namespace !== 'ALL' ? `namespace="${namespace}"` : '';
    const query = `${prometheusURL}query_range?query=(avg by (namespace) (irate(node_cpu_seconds_total{mode!="idle",${namespaceStr}}[1m]))*100)
                  &start=${startDateTime}&end=${endDateTime}&step=10m`
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'getCPUUsageByNamespace' function: ERROR: ${err}`);
  }
});

//get memory usage by namespace (GB)
ipcMain.handle('getMemoryUsageByNamespace', async(event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const namespaceStr = namespace && namespace !== 'ALL' ? `{namespace="${namespace}"}` : '';
    const query = `${prometheusURL}query_range?query=sum(container_memory_working_set_bytes${namespaceStr})
                  by (namespace)&start=${startDateTime}&end=${endDateTime}&step=${'1m'}`;
    return await fetchMetricsData(query, 'bytes');
  }
  catch (err) {
    console.log(`Error in 'getMemoryUsageByNamespace' function: ERROR: ${err}`);
  }
});

//get network I/O recieved by namespace
ipcMain.handle('bytesRecievedByNamespace', async(event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_receive_bytes_total[${'1m'}]))
                  by (namespace)&start=${startDateTime}&end=${endDateTime}&step=${'1m'}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesRecievedByNamespace' function: ERROR: ${err}`);
  } 
});

//get network I/O transmitted by namespace
ipcMain.handle('bytesTransmittedByNamespace', async(event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_transmit_bytes_total[${'1m'}])) 
                by (namespace)&start=${startDateTime}&end=${endDateTime}&step=${'1m'}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesTransmittedByNamespace' function: ERROR: ${err}`);
  }
});

//Node metrics
//get cpu usage by node (%)
ipcMain.handle("getCPUUsageByNode", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=(avg by (node) (irate(node_cpu_seconds_total{mode!="idle"}[1m]))*100)
                  &start=${startDateTime}&end=${endDateTime}&step=10m`
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'getCPUUsageByNode' function: ERROR: ${err}`);
  }
});

//get memory usage by node (GB)
ipcMain.handle("getMemoryUsageByNode", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(container_memory_working_set_bytes) 
                  by (node)&start=${startDateTime}&end=${endDateTime}&step=${"10m"}`;
    return await fetchMetricsData(query, 'bytes');
  }
  catch (err) {
    console.log(`Error in 'getMemoryUsageByNode' function: ERROR: ${err}`);
  }
});

//get network I/O recieved by node
ipcMain.handle("bytesRecievedByNode", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_receive_bytes_total[${"1m"}])) 
                  by (node)&start=${startDateTime}&end=${endDateTime}&step=${"1m"}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesRecievedByNode' function: ERROR: ${err}`);
  }
});

//get network I/O transmitted by node
ipcMain.handle("bytesTransmittedByNode", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_transmit_bytes_total[${"10m"}])) 
                  by (node)&start=${startDateTime}&end=${endDateTime}&step=${"1m"}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesTransmittedByNode' function: ERROR: ${err}`);
  }
});

//pod metrics
//get cpu usage by pod (%)
ipcMain.handle("getCPUUsageByPod", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=(avg by (pod) (irate(node_cpu_seconds_total{mode!="idle"}[1m]))*100)
                  &start=${startDateTime}&end=${endDateTime}&step=10m`
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'getCPUUsageByPod' function: ERROR: ${err}`);
  }
});

//get memory usage by pod (GB)
ipcMain.handle("getMemoryUsageByPod", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const namespaceStr = namespace && namespace !== "ALL" ? `{namespace="${namespace}"}` : "";
    const query = `${prometheusURL}query_range?query=sum(container_memory_working_set_bytes${namespaceStr}) 
                  by (pod)&start=${startDateTime}&end=${endDateTime}&step=${"1m"}`;
    return await fetchMetricsData(query, 'bytes');
  }
  catch (err) {
    console.log(`Error in 'getMemoryUsageByPod' function: ERROR: ${err}`);
  }
});

//get network I/O recieved by pod
ipcMain.handle("bytesRecievedByPod", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_receive_bytes_total[${'1m'}])) 
                  by (pod)&start=${startDateTime}&end=${endDateTime}&step=${'1m'}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesRecievedByPod' function: ERROR: ${err}`);
  }
});

//get network I/O transmitted by pod
ipcMain.handle("bytesTransmittedByPod", async (event, namespace: string) => {
  try {
    const { startDateTime, endDateTime } = getStartAndEndDateTime();
    const query = `${prometheusURL}query_range?query=sum(irate(container_network_transmit_bytes_total[${'1m'}])) 
                  by (pod)&start=${startDateTime}&end=${endDateTime}&step=${'1m'}`;
    return await fetchMetricsData(query);
  }
  catch (err) {
    console.log(`Error in 'bytesTransmittedByPod' function: ERROR: ${err}`);
  }
});
