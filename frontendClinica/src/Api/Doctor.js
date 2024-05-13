import axios from 'axios'

const API='http://localhost:3000/api'


export const DoctorID = (doctorId) => {
    const url = `${API}/doctor/${doctorId}`;
    return axios.get(url);
  };

export const DoctorGet = ()=> {
  const url=`${API}/doctor`
  return axios.get(url)
}
