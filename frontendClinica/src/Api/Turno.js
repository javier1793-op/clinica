import axios from 'axios'

const API='http://localhost:3000/api'


export const turnoGet = () => {
    const url = `${API}/turnos`;
    return axios.get(url);
  };

  export const turnoAdd = async (dataTurno) => {
    try {
      const url = `${API}/turnos`;
      const response = await axios.post(url, dataTurno);
      return response.data;
    } catch (error) {
      console.error('Error adding turno:', error.response || error.message || error);
      throw error;
    }
  }
