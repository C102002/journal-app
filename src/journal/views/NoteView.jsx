import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { light } from '@mui/material/styles/createPalette'
import React, { useMemo, useRef, useState } from 'react'
import { ImageGallery } from '../components'
import moment from 'moment';
import 'moment/locale/es';
import { useEffect } from 'react'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote, startDeletingNote, startSavingNotes, startUploadingFiles } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'



export const NoteView = () => {

    //TODO: Poner la fecha actual
    moment.locale('es')
    const CurrentHour=moment().format('LT');
    const CurrentDate=moment().format('LL');
    const InitialState=`${CurrentDate} ${CurrentHour}`;

    const dispatch=useDispatch();
    
    const [time, setTime] = useState(InitialState);

    // useMemo(() => 
    // {
    //     console.log('oeooe prueba');
    //     const interval = setInterval(() => {
    //         console.log('oeooe');
    //         moment.locale('es');
    //         setTime(moment().format('LL')+' '+moment().format('LT'));
    //         }, 1000)
    //         //[time] antes
    // }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         moment.locale('es');
    //         setTime(moment().format('LL')+' '+moment().format('LT'));
    //     }, 60000);
    //   }, [time]);

    const {active:note, messageSaved,isSaving}=useSelector(state=>state.journal)

    const {body,title,date,onInputChange,formState}=useForm(note)

    const dateString=useMemo(() =>{
        const newDate= new Date(date);
        return new Intl.DateTimeFormat('es-ES',{dateStyle:'full',timeStyle:'full'}).format(newDate);
    }, [date])

    useEffect(() => {
      dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
      if(messageSaved.length>0){
        Swal.fire('Nota actualizada',messageSaved,'success')
      }
    }, [messageSaved])
    

    const onSavedNote=()=>{
        dispatch(startSavingNotes());
    }

    const onFileInputChange=({target})=>{
        if(target.files===0) return;
        dispatch(startUploadingFiles(target.files))
        Swal.fire('Nota actualizada','Imagenes cargadas a la nota','info');
    }

    const fileInputRef=useRef();

    const onDeleteNote=()=>{
        Swal.fire({
            title: `¿Quieres eliminar la nota ${note.title}?`,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Eliminar`,
            confirmButtonText: "No Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(`No ha sido eliminado`, `La nota ${note.title} no ha sido eliminada`, "info");
            } else if (result.isDenied) {
                dispatch(startDeletingNote());
              Swal.fire("Eliminado",`La nota ${note.title} ha sido eliminada`, "success");
            }
          });
    }

  return (
    <>
        <Grid container direction='row' justifyContent='space-between'
        className='animate__animated animate__fadeIn'
        sx={{mb:1}}>
            <Grid item>
                <Typography fontSize={25} fontWeight={light}>
                    {/* 24 de Octubre de 2024 */}
                    {'Fecha actual: '+time}
                </Typography>

                <Typography fontSize={25} fontWeight={light}>
                    {'Fecha de la nota: '+dateString}
                </Typography>
            </Grid>
            <Grid item>

                {/* Es el input al que se referencia en el subir */}
                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{display:'none'}}/>
                
                <Button 
                    color='primary'
                    disabled={isSaving}
                    onClick={()=>fileInputRef.current.click()}
                    sx={{padding:2}}> 
                    <UploadOutlined sx={{fontSize:30, mr:1}} />
                    Subir Imagenes
                </Button>

                <Button color='primary' sx={{padding:2}}
                onClick={onSavedNote}
                disabled={isSaving}>
                    <SaveOutlined sx={{fontSize:30, mr:1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='titulo'
                    sx={{border:'none', mb:1}}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que paso el día de hoy?'
                    label='Descripcion/Cuerpo'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />                
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                onClick={onDeleteNote}
                sx={{mt:2}}
                color='error'>
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>

            {/*Imagenes de prueba*/}
            <ImageGallery images={note.imageUrls}/>


        </Grid>
    </>
  )
}
