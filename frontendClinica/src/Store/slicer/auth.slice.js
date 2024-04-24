import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state)=>{
      state.isAuth= false;
    }
  }
});

export const {logout } = authSlice.actions;
export default authSlice.reducer;
