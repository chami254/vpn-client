"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");
console.log("Electron main process starting...");
function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    win.loadURL("http://localhost:5173");
}
app.whenReady().then(createWindow);
