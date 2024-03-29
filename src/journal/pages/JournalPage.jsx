import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingPageView,NoteView } from '../views'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const {isSaving=true,active}=useSelector(state=>state.journal)

  const dispatch=useDispatch();

  const onClickNewNote=()=>{
    dispatch(startNewNote());
  }
  return (
    <>
      <JournalLayout>
        {
          (active!=null)
          ? <NoteView/>
          : <NothingPageView/>
        }
        {/* <NothingPageView/> */}
        <IconButton
          disabled={isSaving}
          onClick={onClickNewNote}
          size='large'
          sx={{
            color:'white',
            backgroundColor:'error.main',
            ':hover':{backgroundColor:'error.main', opacity:0.9},
            position: 'fixed',
            right:50,
            bottom:50
          }}>
            <AddOutlined sx={{fontSize:30}}/>
        </IconButton>
      </JournalLayout>
    </>
  )
}
