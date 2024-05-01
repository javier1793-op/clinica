import "../../../Scss/turno.scss";
import Head from "../../Components/Head";
import TableTurnos from "./TableTurnos";


const index = () => {
  return (
    <>
      <Head title={"Lista de Turnos"} />
      <div className="containerPage">
        
            <TableTurnos/>
        
      </div>
    </>
  );
};

export default index;
