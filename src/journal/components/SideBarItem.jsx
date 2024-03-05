import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({title='',body='',id,date,imageUrls=[]}) => {

    const {active}=useSelector(state=>state.journal)

    const note={
        title,
        body,
        id,
        date,
        imageUrls
    }

    const dateString=useMemo(() =>{
        const newDate= new Date(date);
        return new Intl.DateTimeFormat('es-ES',{dateStyle:'short',}).format(newDate);
    }, [date])

    const dispatch=useDispatch();

    const newTitle = useMemo(()=>{
        if (title.length===0) return 'No tiene Titulo'

        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[title])

    const newBody = useMemo(()=>{
        if (body.length===0) return 'No tiene cuerpo'

        return body.length > 20
            ? body.substring(0,20) + '...'
            : body;
    },[body])

    const onActiveNote=()=>{
        //console.log(active);
        dispatch(setActiveNote(note));
    }


    // const ActiveNote=()=>(
    //     (id===active.id)
    //     ? <TurnedInNot/>
    //     : <TurnedInNot/>
    // )

  return (
        <ListItem disablePadding>
        <ListItemButton
        onClick={onActiveNote}>

            <ListItemIcon>
                {/* {ActiveNote} */}
                <TurnedInNot/>
            </ListItemIcon>

            <Grid container alignContent='flex-start'>
                {/* <ListItemText primary={newTitle}/>
                <ListItemText primary={dateString}/>
                <ListItemText secondary={newBody}/> */}
                <ListItemText primary={newTitle}
                secondary={
                <>
                    <Typography
                    variant="body"
                    color="text.primary">
                        {dateString}
                    </Typography>
                    <br/>
                    <Typography
                    variant="body"
                    color="text.secondary">
                        {newBody}
                    </Typography>
                </>}/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
