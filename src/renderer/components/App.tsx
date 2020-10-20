import React from 'react'
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from '../routes'
import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'

import 'fontsource-roboto/latin-400.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'hidden',
    },
    innerContent: {
      height: '100%',
      overflow: 'auto',
      padding: theme.spacing(3),
    },
  })
)

export const App: React.FC = () => {
  const styles = useStyles()
  return (
    <Router>
      <div className={styles.root}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <div className={styles.content}>
          <Toolbar />
          <div className={styles.innerContent}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
