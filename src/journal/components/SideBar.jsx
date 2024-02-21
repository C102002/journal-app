import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth=240}) => {
  return (
    <Box
        component='nav'
        sx={{width:{sm: drawerWidth },flexShrink:{sm:0}}}
    >
        <Drawer
            variant='permanent' //Puede ser temporary si se quiere poner condicional
            open //Nt: Lo mismo que open={true}
            sx={{
                display:{xs:'block'},
                //OJO: Pilas con los espacios '&.MuiDrawer-paper'
                '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>Alfredo Fung</Typography>
            </Toolbar>
            
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text=>(
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary='Texto sxaschaskjhckasck haskchsajkchkjsahk '/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
