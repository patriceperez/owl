import { contextBridge, ipcRenderer } from 'electron'
import { channels } from './main/channels'

contextBridge.exposeInMainWorld(
  'backbone',
  channels
    .map((req) => ({
      [req.getName()]: (data: any) =>
        ipcRenderer.send(req.getName(), data),
    }))
    .reduce((obj, newKey) => ({ ...obj, ...newKey }))
)
