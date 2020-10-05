import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
)

export const NavBar: React.FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" noWrap className={styles.title}>
            OWL
          </Typography>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
