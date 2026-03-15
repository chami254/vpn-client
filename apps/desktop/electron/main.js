"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const { app, BrowserWindow } = require("electron");
const path = require("path");
console.log("Electron main process starting...");
let clientService;
app.whenReady().then(() => {
    clientService = (0, child_process_1.spawn)("node", ["../client-service/index.js"], {
        stdio: ["pipe", "pipe", "pipe"],
    });
    clientService.stdout.on("data", (data) => {
        console.log(`ClientService: ${data}`);
    });
    clientService.stderr.on("data", (data) => {
        console.error(`ClientService Error: ${data}`);
    });
});
