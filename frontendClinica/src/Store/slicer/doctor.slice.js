
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctorData: [],
};

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctorData: (state, action) => {
      state.doctorData = action.payload;
    },
    clearDoctorData: (state) => {
      state.doctorData = null;
    },
  },
});

export const { setDoctorData, clearDoctorData } = doctorSlice.actions;

export const selectDoctorData = (state) => state.doctor.doctorData;

export default doctorSlice.reducer;
