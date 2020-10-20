import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { Link } from 'react-router-dom'
import { ListItemLink } from './ListItemLink'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
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
          to="/prepare"
          primary="Prepare"
          icon={<BorderColorIcon />}
        />
      </List>
    </Drawer>
  )
}
