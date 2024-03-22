const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
},
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
});

module.exports = mongoose.model("Usuario", userSchema);
