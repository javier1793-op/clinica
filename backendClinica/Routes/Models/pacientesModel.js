const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pacientesSchema = schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  FechaNacimiento: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  teléfono: {
    type: String,
  },
});

module.exports = mongoose.model("Paciente", pacientesSchema);
