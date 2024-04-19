import "../../../Scss/turno.scss";
import Head from "../../Components/Head";
import Paginacion from "../../Components/Paginacion";
import { TableTurnos } from "./TableTurnos";
import { Button } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { RiSearchLine } from "@remixicon/react";
import { DatePicker} from "@tremor/react";

const index = () => {
  return (
    <>
      <Head title={"Lista de Turnos"} />
      <div className="containerPage">
        <div className="contentPage">
          <section>
            <div className="headTable">
              <div className="inputSearch">
                <TextInput icon={RiSearchLine} placeholder="Buscar..." />
              </div>
              <div className="inputSearch">
                <DatePicker />
              </div>
              <Button variant="primary" className="btnAdd">
                Agregar Turno
              </Button>
            </div>
            <TableTurnos />
            <Paginacion />
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
