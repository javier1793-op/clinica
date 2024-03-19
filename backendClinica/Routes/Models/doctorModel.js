const mongoose = require("mongoose");
const schema = mongoose.Schema;

const doctorSchema = schema({
  apellido: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
