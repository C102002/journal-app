import { Box, Toolbar } from '@mui/material'
import React, { useEffect } from 'react'
import { NavBar, SideBar} from '../components';
import { useSelector } from 'react-redux';

//NT: Tamaño constante del sidebar
const drawerWidth=270;
const drawerWidthNavBar=0;


export const JournalLayout = ({children}) => {

  const {ActiveSideBar=false}=useSelector((status)=>status.journal)

  useEffect(() => {
  }, [ActiveSideBar])

  return (
    <>
        <Box 
        //Nt Acomodarlo a como era antes
        // sx={{display:'flex'}}
        className='animate__animated animate__fadeIn'>
            
            <NavBar drawerWidth={drawerWidthNavBar}/>
            
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
