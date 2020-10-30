import { BrowserWindow, app, ipcMain } from 'electron'
import { autoUpdater } from "electron-updater"
import * as log from 'electron-log'
import { channels } from './main/channels'
import path from 'path'
import 'sharp'

log.transports.file.level = 'debug'
autoUpdater.logger = log

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

  if (process.env.NODE_ENV !== 'development') {
    win.removeMenu()
  }

  win.loadFile(path.resolve(__dirname, 'renderer', 'static', 'index.html'))

  channels.forEach((channel) => ipcMain.handle(channel.getName(), channel.handle))

  autoUpdater.checkForUpdatesAndNotify()
}

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(path.resolve('build'), {
    electron: path.resolve(__dirname, '..', 'node_modules', '.bin', 'electron'),
  })
}
