import React from 'react'
import { Divider, Drawer, List, Toolbar } from '@material-ui/core'
import { ListItemLink } from './ListItemLink'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import CollectionsIcon from '@material-ui/icons/Collections'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import GetAppIcon from '@material-ui/icons/GetApp'
import BackupIcon from '@material-ui/icons/Backup'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
  })
)

export const SideBar: React.FC = () => {
  const styles = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={styles.drawer}
      classes={{ paper: styles.drawerPaper }}
    >
      <Toolbar />
      <List>
        <ListItemLink
          to="/sets"
          primary="Image Sets"
          icon={<CollectionsIcon />}
        />
        <ListItemLink
          to="/capture"
          primary="Capture"
          icon={<PhotoCameraIcon />}
        />
        <Divider />
        <ListItemLink
          to="/import"
          primary="Import"
          icon={<GetAppIcon />}
        />
        <ListItemLink
          to="/prepare"
          primary="Prepare"
          icon={<BurstModeIcon />}
        />
        <ListItemLink
          to="/export"
          primary="Export"
          icon={<BackupIcon />}
        />
      </List>
    </Drawer>
  )
}
