import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

createTheme

export const darkTheme=createTheme({

    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        thirdly:{
            main:'#000000' //Negro
        },
        forthdly:{
            main:'#FFFFFF' //Blanco
        },
        error:{
            main:red.A400
        }
    },
})