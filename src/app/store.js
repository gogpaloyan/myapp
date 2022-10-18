import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import contactReducer from '../features/contacts/contactSlice'
import registerReducer from '../features/register/registerSlice'
export const store = configureStore({
    reducer:{
        todo: todoReducer,
        contacts: contactReducer,
        register: registerReducer,
  
         
    }
})