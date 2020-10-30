import { contextBridge, ipcRenderer } from 'electron'
import { channels } from './main/channels'

contextBridge.exposeInMainWorld(
  'backbone',
  {
    async call(action: String, data?: any) {
      const channel = channels.filter(channel => channel.getName() === action)[0]
      if (channel) {
        console.log(`executing channel: ${channel.getName()}`)
        return ipcRenderer.invoke(channel.getName(), data)
      } else {
        console.log(`could not find channel ${action}`)
      }
    }
  }
)
