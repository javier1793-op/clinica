import Head from "../../Components/Head";
import Nav from "../../Components/Nav";
import  Calendario from '../Calendario'
import { Outlet } from "react-router";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {

  const location=useLocation()

  return (
    <>
      <div className="min-h-full">
        <Nav />

        <Head title={"Calendario de turnos"} />
        <main>
        {location.pathname === '/' ? <Calendario /> : <Outlet />}
        </main>
      </div>
    </>
  );
}
