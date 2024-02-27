import { CircularProgress, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export const CheckingAuth = () => {
  return (
            <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            // NT: sx es un style extended
            sx={{minHeight:'100vh',backgroundColor:'primary.main', padding:4}}>

            <Grid container
            direction='row'
            justifyContent='center'
            >
                <CircularProgress color='warning'/>
            </Grid>

            <Grid container
            direction='row'
            justifyContent='center'
            >
            <Typography color='common.white'> Loading </Typography>
            </Grid>

        </Grid>
  )
}
