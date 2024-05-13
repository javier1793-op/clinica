import axios from 'axios'

const API='http://localhost:3000/api'


export const PacienteID = (pacienteId) => {
    const url = `${API}/pacientes/${pacienteId}`;
    return axios.get(url);
  };

export const PacienteGet = ()=>{
  const url = `${API}/pacientes`
  return axios.get(url)
}