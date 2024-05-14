import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { turnoAdd, turnoGet } from '../../Api/Turno';

const initialState = {
  turnosData: [],
  loading: 'inactiva', 
  error: null,
};

export const cargarTurnos = createAsyncThunk('turnos/cargarTurnos', async () => {
    const response = await turnoGet(); 
    return response.data; 
  });
  
  export const agregarTurno = createAsyncThunk('turnos/agregarTurno', async (dataTurno) => {
    const response = await turnoAdd(dataTurno); 
    return response.data; 
  });

export const turnoSlice = createSlice({
  name: 'turno',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cargarTurnos.pending, (state) => {
        state.loading = 'cargando'; 
        state.error = null; 
      })
      .addCase(cargarTurnos.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.turnosData = action.payload; 
      })
      .addCase(cargarTurnos.rejected, (state, action) => {
        state.loading = 'error'; 
        state.error = action.error.message; 
      })
      .addCase(agregarTurno.pending, (state) => {
        state.loading = 'cargando'; 
        state.error = null; 
      })
      .addCase(agregarTurno.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.turnosData.push(action.payload); 
      })
      .addCase(agregarTurno.rejected, (state, action) => {
        state.loading = 'error'; 
        state.error = action.error.message; 
        console.log(state.error)
      });
  },
});


export const { selectTurnosData } = turnoSlice.actions;
export default turnoSlice.reducer;
