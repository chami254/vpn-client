"use strict";
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("vpn", {
    status: () => "disconnected",
});
