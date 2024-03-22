const Paciente = require('../Models/pacientesModel');

// Controlador para crear un nuevo paciente
exports.crearPaciente = async (req, res) => {
    try {
        
        const { nombre, apellido, FechaNacimiento, email, telefono, dni } = req.body;
 
        const data = await Paciente.create({
          nombre,
          apellido,
          FechaNacimiento,
          email,
          telefono,
          dni
        });
        if (!data) {
          throw new Error("El paciente fue creado exitosamente");
        }
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "Ocurrio un error en la creacion del paciente" });
        console.log(error)
      }
};

// Controlador para obtener todos los pacientes
exports.obtenerTodosLosPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los pacientes' });
  }
};

// Controlador para obtener un paciente por su ID
exports.obtenerPacientePorId = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener el paciente' });
  }
};

// Controlador para actualizar un paciente por su ID
exports.actualizarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente actualizado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el paciente' });
  }
};

// Controlador para eliminar un paciente por su ID
exports.eliminarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente eliminado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el paciente' });
  }
};