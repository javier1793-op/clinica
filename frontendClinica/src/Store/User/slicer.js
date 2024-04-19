import { createSlice } from "@reduxjs/toolkit";

//recuperar del localstore el token y colocar en le insitalSate con validaciones.

const initialState=['soy una maquina']

export const userSlicer = createSlice({
    name: 'users',
    initialState,
    reducer:{}
})

export default userSlicer.reducer