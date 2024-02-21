import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar} from '../components';

//NT: Tamaño constante del sidebar
const drawerWidth=270;

export const JournalLayout = ({children}) => {
  return (
    <>
        <Box sx={{display:'flex'}}>
            
            <NavBar drawerWidth={drawerWidth}/>
            
            <SideBar drawerWidth={drawerWidth}/>
            <Box 
            component='main'
            sx={{flexGrow:1,p:3 }}
            >
                {/*Toobar */}
                <Toolbar/>
                {children}
            </Box>
        </Box>
    </>
  )
}
