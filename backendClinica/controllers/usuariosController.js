const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    try {
        const { nombreUsuario, email, contraseña, doctor } = req.body;

        // Verificar si el email ya está registrado
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ mensaje: 'El email ya está registrado' });
        }

        // Crear nuevo usuario
        usuario = new Usuario({ nombreUsuario, email, contraseña, doctor });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.contraseña = await bcrypt.hash(contraseña, salt);

        // Guardar usuario en la base de datos
        await usuario.save();

        // Crear token de acceso
        const payload = {
            usuario: {
                id: usuario._id
            }
        };

        jwt.sign(payload, 'secreto', { expiresIn: 3600 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al registrar el usuario' });
    }
};


exports.iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ mensaje: 'Credenciales inválidas' });
        }

        // Verificar contraseña
        const esMatch = await bcrypt.compare(password, usuario.password);
        if (!esMatch) {
            return res.status(400).json({ mensaje: 'Credenciales inválidas' });
        }

        // Crear token de acceso
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        jwt.sign(payload, 'secreto', { expiresIn: 3600 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al iniciar sesión' });
    }
};
