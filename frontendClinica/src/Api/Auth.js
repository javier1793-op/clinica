import axios from 'axios'

const API='http://localhost:3000/api'


export const userSesion= user => axios.post(`${API}/login`,user)