import axios from 'axios'

const API='http://localhost:3000/api'


export const turnoGet = () => {
    const url = `${API}/turnos`;
    return axios.get(url);
  };
