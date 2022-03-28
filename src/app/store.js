import { configureStore } from "@reduxjs/toolkit";
import composeEmailReducer from '../features/composeSlice';
export default configureStore({
    reducer:{
        email:composeEmailReducer,
    }
})