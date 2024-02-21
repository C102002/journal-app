import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({drawerWidth=240}) => {
  return (
  <>
    {/* NavBar automatico de material ui */}
    <AppBar
        position='fixed'
        sx={{
            width:{sm:`calc(100% - ${drawerWidth}px)`},
            ml:{ sm:`${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                // NT: El boton solamente aparece si es pequeno la pantalla
                sx={{mr:2, display:{sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid 
            container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  </>
  )
}
