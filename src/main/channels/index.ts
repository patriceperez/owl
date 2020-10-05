import { ipcRenderer } from 'electron'
import glob from 'glob'
import path from 'path'

export const channels = glob.sync(__dirname + '/*.js')
    .map( filename => path.resolve(__dirname, filename))
    .filter(filename => filename !== path.resolve(__dirname, "index.js"))
    .map(function (file) {
        return require(file).default
    })