import { TurnedInNot } from '@mui/icons-material'
import { Box, Button, Divider, Drawer, Grid, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem'
import { DesactiveSidebar } from '../../store/journal'
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useTheme } from '@emotion/react'

export const SideBar = ({drawerWidth=240}) => {

    const theme = useTheme();

   const {displayName}=useSelector((status)=>status.auth)

    const {notes=[],ActiveSideBar,isClosing}=useSelector((status)=>status.journal)

   useEffect(() => {
   }, [ActiveSideBar])

   const dispatch=useDispatch();

   const onCloseDrawer=()=>{
    dispatch(DesactiveSidebar());
   }

//    if (notes!==0){
//     notes.sort((x,y)=>x.date-y.date);
//    }
  return (
    <Box
        component='nav'
        sx={{width:{sm: drawerWidth },flexShrink:{sm:0}}}
    >
        <Drawer
            anchor='left'
            variant='temporary' //Puede ser temporary si se quiere poner condicional
            open={ActiveSideBar}//Nt: Lo mismo que open={true}
            onClose={onCloseDrawer}
            sx={{
                display:{xs:'block'},
                //OJO: Pilas con los espacios '&.MuiDrawer-paper'
                '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth}
            }}
        >
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
                    <IconButton color='forthdly' sx={{padding:2}} >
                        {theme.palette.mode === 'purple' ? <Brightness3Icon/> : <Brightness1Icon />}
                    </IconButton>
                </Toolbar>
            </Grid>
                <Divider/>
            <List>
                {
                    notes.map( note=>(
                        <SideBarItem key={note.id}{...note}/>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
