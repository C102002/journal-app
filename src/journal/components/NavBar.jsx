import {LogoutOutlined, MenuBook, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'
import MenuIcon from '@mui/icons-material/Menu';
import { ActiveSidebar, DesactiveSidebar } from '../../store/journal'


export const NavBar = ({drawerWidth=240}) => {
    
    const dispatch=useDispatch();

    const {Sidebar=false}=useSelector((status)=>status.journal)


    const onLogout=()=>{
        dispatch(startLogout())
    }

    const OpenCloseSidebar=()=>{
        if (!Sidebar) OpenSidebar();
    }

    const OpenSidebar=()=>{
        dispatch(ActiveSidebar())
    }

    const CloseSidebar=()=>{
        dispatch(DesactiveSidebar())
    }

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
            {/* <IconButton
                color='inherit'
                edge='start'
                // NT: El boton solamente aparece si es pequeño la pantalla
                sx={{mr:2, display:{sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton> */}

            <Grid 
            container direction='row' justifyContent='space-between' alignItems='center'>

                <IconButton
                    onClick={OpenCloseSidebar}>
                    <MenuIcon color='thirdly'/>
                </IconButton>

                <Typography variant='h6' noWrap component='div' color='thirdly'> JournalApp </Typography>

                <IconButton color='error' onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  </>
  )
}
