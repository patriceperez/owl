import React from 'react'
import api from '../../../main/IpcService'
import { CssBaseline, Toolbar } from '@material-ui/core'
import { NavBar } from '../NavBar/NavBar'

import 'fontsource-roboto/latin-400.css'

const notify = () =>
  api.notify({
    title: 'Stom taipei',
    body: 'this is the owl notification body',
    subtitle: 'what is this?',
  })

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
    </>
  )
}
