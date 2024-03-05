import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { useContext, useMemo, useState } from 'react'
import { purpleTheme,darkTheme } from './'

export const AppTheme = ({children}) => {

  const [theme, setTheme] = useState(purpleTheme)

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          {children}
      </ThemeProvider>
  )
}
