import { createSlice } from "@reduxjs/toolkit";
import { deleteCookies, getCookies } from "../../Hooks/useCookies";

const initialState = {
  isAuth: getCookies('token') || false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state)=>{
      state.isAuth= false;
      deleteCookies('token')
    }
  }
});

export const {logout } = authSlice.actions;
export default authSlice.reducer;
