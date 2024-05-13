const PacienteDetalle = ({ paciente }) => {
  const pacienteEncontrado = paciente[0];


  const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    

    const mesActual = fechaActual.getMonth() + 1; 
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNac.getMonth() + 1;
    const diaNacimiento = fechaNac.getDate();
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
    
    return edad;
  };
  return (
    <>
      <div
        className={`containerPacienteDetalle ${
          pacienteEncontrado ? "encontrado" : ""
        }`}
      >
        {pacienteEncontrado ? (
          <>
            <h3>
              Paciente:{" "}
              {`${pacienteEncontrado.apellido} ${pacienteEncontrado.nombre}`}
            </h3>
            <span>{`Edad: ${calcularEdad(pacienteEncontrado.FechaNacimiento)} años`}</span>
            <span>DNI: {pacienteEncontrado.dni}</span>
            <span>Telefono: {pacienteEncontrado.telefono}</span>
            <span>Email: {pacienteEncontrado.email}</span>
          </>
        ) : (
          <>
            <h1>Paciente no encontrado</h1>
            <button className="btnAdd bg-red-400 mt-2  whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis">
              Agregar Paciente
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PacienteDetalle;
