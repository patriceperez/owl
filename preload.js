const { contextBridge, ipcRenderer } = require('electron')
const { channels } = require('./build/module/ipc/channels')

contextBridge.exposeInMainWorld(
  'backbone',
  channels
    .map((req) => ({
      [req.getName()]: (data) =>
        ipcRenderer.send(req.getName(), data),
    }))
    .reduce((obj, newKey) => ({ ...obj, ...newKey }))
)
