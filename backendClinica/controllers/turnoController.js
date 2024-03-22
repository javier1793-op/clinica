const Turno = require('../Models/turnosModel');

exports.crearTurno = async (req, res) => {
    try {
        
        const { pacienteId, doctorId, fecha, motivo } = req.body;

        const turno = new Turno({
            pacienteId,
            doctorId,
            fecha,
            motivo
        });

        await turno.save();

        res.status(201).json({ mensaje: 'Turno creado exitosamente', turno });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al crear el turno' });
    }
};

exports.obtenerTodosLosTurnos = async (req, res) => {
    try {
        const turnos = await Turno.find();
        res.status(200).json(turnos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener los turnos' });
    }
};

exports.obtenerTurnoPorId = async (req, res) => {
    try {
        const id = req.params.id;

        const turno = await Turno.findById(id);

        if (!turno) {
            return res.status(404).json({ mensaje: 'Turno no encontrado' });
        }

        res.status(200).json(turno);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener el turno' });
    }
};

exports.modificarTurno = async (req, res) => {
    try {
        const id = req.params.id;

        const turnoActualizado = await Turno.findByIdAndUpdate(id, req.body, { new: true });

        if (!turnoActualizado) {
            return res.status(404).json({ mensaje: 'Turno no encontrado' });
        }

        res.status(200).json({ mensaje: 'Turno actualizado exitosamente', turno: turnoActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al modificar el turno' });
    }
};

exports.eliminarTurno = async (req, res) => {
    try {
        const id = req.params.id;

        await Turno.findByIdAndDelete(id);

        res.status(200).json({ mensaje: 'Turno eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el turno' });
    }
};
