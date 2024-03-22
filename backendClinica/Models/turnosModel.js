const mongoose = require("mongoose");
const schema = mongoose.Schema;

const turnosSchema = schema({
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  }, 
  fecha: {
    type: Date,
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Turno", turnosSchema);
