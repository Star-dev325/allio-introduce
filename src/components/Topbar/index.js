import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default Topbar = ({ children }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          Leon Wang
        </Typography>
      </Toolbar>
    </AppBar>
  )
}