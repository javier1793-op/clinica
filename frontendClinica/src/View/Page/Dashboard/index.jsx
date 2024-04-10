import Head from "../../Components/Head";
import Nav from "../../Components/Nav";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <Nav />

        <Head title={"Calendario de turnos"} />
        <main>
        <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
