import React from 'react'
import api from '../../ipc/IpcService'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'fontsource-roboto/latin-400.css'

const notify = () => api.notify({ title: "Stom taipei", body: 'this is the owl notification body', subtitle: "what is this?"})

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <h1>Hello World!!!</h1>
      <button onClick={notify}>Notify</button>
    </>
  )
}
