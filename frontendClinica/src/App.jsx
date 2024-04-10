import { Routes, Route } from "react-router-dom";

import Registro from './View/Page/Registro'
import Dashboard from "./View/Page/Dashboard";
import Calendario from "./View/Page/Calendario";
import Login from './View/Page/Login'


function App() {
  

  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/turnos" element={'Turnos'}/>
          <Route path="/pacientes" element={'Pacientes'}/>
          <Route path="/doctores" element={'Doctores'}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/*" element={'Pagina no encontrada 404'}/>
        </Route>
      </Routes>
    
  );
}


export default App;
