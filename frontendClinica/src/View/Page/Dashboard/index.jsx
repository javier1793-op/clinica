import Nav from "../../Components/Nav";
import Calendario from "../Calendario";
import { Navigate, Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../Hooks/useAppSelector";
import Login from '../Login'

export default function Dashboard() {
  const location = useLocation();

   const isAuth = useAppSelector(state => state.auth.isAuth);
  

  return (
    <>
    {isAuth
    ? <div className="min-h-full">
        <Nav />

        <main>{location.pathname === "/" ? <Calendario /> : <Outlet />}</main>
      </div>
    :
    <Login/>
    }
     
    </>
  );
}



