import { createSlice } from "@reduxjs/toolkit";
import { deleteCookies, getCookies } from "../../Hooks/useCookies";

const initialState = {
  isAuth: false
};



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state)=>{
      state.isAuth= getCookies('token')
    },
    logout: (state)=>{
      state.isAuth= false;
      deleteCookies('token')
    },
  
  }
});

export const {logout, login } = authSlice.actions;
export default authSlice.reducer;
