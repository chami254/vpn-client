import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("vpn", {
  connect: () => ipcRenderer.invoke("vpn-connect"),
  disconnect: () => ipcRenderer.invoke("vpn-disconnect")
});