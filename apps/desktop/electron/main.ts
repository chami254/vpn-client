import { ipcMain } from "electron";
import { spawn } from "child_process";

const { app, BrowserWindow } = require("electron");
const path = require("path");

console.log("Electron main process starting...");

let clientService: any;


app.whenReady().then(() => {
  clientService = spawn("node", ["../client-service/index.js"], {
    stdio: ["pipe", "pipe", "pipe"],
  });
  
  clientService.stdout.on("data", (data: any) => {
    console.log(`ClientService: ${data}`);
  });
  
  clientService.stderr.on("data", (data: any) => {
    console.error(`ClientService Error: ${data}`);
  });
})
