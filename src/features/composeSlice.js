import { createSlice } from "@reduxjs/toolkit";

export const composeSlice=createSlice({
    name:'email',
    initialState:{
        composeMessageOpen:false,
    },

    reducers:{
        openComposeMessage:(state)=>{
            state.composeMessageOpen=true;
        },

        closeComposeMessage:(state)=>{
            state.composeMessageOpen=false;
        },
    },
})
export const {openComposeMessage,closeComposeMessage}=composeSlice.actions;

export const selectComposeMessage=(state)=>state.email.composeMessageOpen;

export default composeSlice.reducer;