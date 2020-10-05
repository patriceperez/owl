import { BrowserWindow, app, ipcMain } from 'electron'
import path from 'path'
import { channels } from './main/channels'

app.whenReady().then(createWindow)

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    center: true,
    title: 'OWL - Toolbox for 360 Image Sets',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  win.loadFile(path.resolve(__dirname, 'renderer', 'static', 'index.html'))

  channels.forEach((channel) => ipcMain.on(channel.getName(), channel.handle))
}

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(path.resolve('build'), {
    electron: path.resolve(__dirname, '..', 'node_modules', '.bin', 'electron'),
  })
}
