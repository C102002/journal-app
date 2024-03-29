import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

createTheme

export const purpleTheme=createTheme({

    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        thirdly:{
            main:'#FFFFFF' //Blanco
        },
        forthdly:{
            main:'#000000' //Negro
        },
        error:{
            main:red.A400
        }
    },
})