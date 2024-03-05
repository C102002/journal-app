import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved:'',
        notes:[],
        active:null,
        ActiveSideBar:false,
        isClosing:false,
        //imageUrls:[],
        //Nota en general
        // active:{
        //     id:'1123',
        //     title:'',
        //     body:'',
        //     date:1234546
        //     imageURLs:[],
        // }
    },
    reducers: {
        savingNewNote:(state)=>{
            state.isSaving=true;
        },
        addNewEmptyNote: (state,action) => {
            state.isSaving=false;
            state.notes.push(action.payload);
        },
        setActiveNote:(state,action)=>{
            state.active=action.payload;
            state.messageSaved='';
        },
        setNotes:(state,action)=>{
            state.notes=action.payload;
        },
        setSaving:(state,action)=>{
            state.isSaving=true;
            state.messageSaved='';
        },
        updateNote:(state,action)=>{
            state.isSaving=false;
            state.notes=state.notes.map(note=>{
                if (note.id === action.payload.id) return action.payload
                return note
            })

            state.messageSaved=`${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote:(state,action)=>{
            console.log(state.active.imageUrls);
            state.active.imageUrls=[...state.active.imageUrls,...action.payload];
            state.isSaving=false;
        },
        clearNotesLogout:(state)=>{
            state.isSaving=false;
            state.messageSaved='';
            state.notes=[];
            state.active=null;
        },
        deleteNoteById:(state,action)=>{
            state.active=null;
            //NT: No se porque no sirvio
            // state.notes=state.notes.map(note=>{
            //     if (note.id!==action.payload.id) return note;
            // })
            state.notes=state.notes.filter(note=>note.id!==action.payload)
        },
        ActiveSidebar:(state)=>{
            state.ActiveSideBar=true;
            state.isClosing=false;
        },
        DesactiveSidebar:(state)=>{
            state.ActiveSideBar=false;
            state.isClosing=true;
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewNote,addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNote,setPhotosToActiveNote,clearNotesLogout,deleteNoteById,ActiveSidebar,DesactiveSidebar } = journalSlice.actions;