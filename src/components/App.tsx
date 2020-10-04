import React from 'react'
import api from '../ipc/IpcService'

const notify = () => api.notify({ title: "Stom taipei", body: 'this is the owl notification body', subtitle: "what is this?"})

export const App: React.FC = () => {
  return (
    <>
      <h1>Hello World!!!</h1>
      <button onClick={notify}>Notify</button>
    </>
  )
}
