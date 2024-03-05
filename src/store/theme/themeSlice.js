import { createSlice } from '@reduxjs/toolkit';
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeColor:'purple'
    },
    reducers: {
        setDark: (state) => {
            state.themeColor='dark'
        },
        setLigth: (state) => {
            state.themeColor='purple'
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = themeSlice.actions;