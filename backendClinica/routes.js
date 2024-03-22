const express = require('express');
const router = express.Router();

//Iimportacion de controladores
const pacienteController = require('./controllers/pacienteController');
const turnosController = require('./controllers/turnoController');
const doctoresController = require('./controllers/doctorController');
const usuariosController = require('./controllers/usuariosController')

//PACIENTES
// Ruta para crear un nuevo paciente
router.post('/pacientes', pacienteController.crearPaciente);
// Ruta para obtener todos los pacientes
router.get('/pacientes', pacienteController.obtenerTodosLosPacientes);
// Ruta para obtener un paciente por su ID
router.get('/pacientes/:id', pacienteController.obtenerPacientePorId);
// Ruta para actualizar un paciente por su ID
router.put('/pacientes/:id', pacienteController.actualizarPaciente);
// Ruta para eliminar un paciente por su ID
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);


//TURNOS
// Ruta para crear un nuevo turno
router.post('/turnos', turnosController.crearTurno);
// Ruta para obtener todos los turnos
router.get('/turnos', turnosController.obtenerTodosLosTurnos);
// Ruta para obtener un turno por su ID
router.get('/turnos/:id', turnosController.obtenerTurnoPorId);
// Ruta para modificar un turno
router.put('/turnos/:id', turnosController.modificarTurno);
// Ruta para eliminar un turno
router.delete('/turnos/:id', turnosController.eliminarTurno);

//DOCTORES
// Ruta para crear un nuevo doctor
router.post('/doctor', doctoresController.crearDoctor);
// Ruta para obtener todos los doctores
router.get('/doctor', doctoresController.obtenerTodosLosDoctores);
// Ruta para obtener un doctor por su ID
router.get('/doctor/:id', doctoresController.obtenerDoctorPorId);
// Ruta para modificar un doctor
router.put('/doctor/:id', doctoresController.modificarDoctor);
// Ruta para eliminar un doctor
router.delete('/doctor/:id', doctoresController.eliminarDoctor);

//USUARIOS
// Ruta para crear un nuevo usuario
router.post('/registro', usuariosController.registrarUsuario);
// Ruta para iniciar sesión
router.post('/login', usuariosController.iniciarSesion);

module.exports = router;
