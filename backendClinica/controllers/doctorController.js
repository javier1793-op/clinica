const Doctor = require('../Models/doctorModel');

exports.crearDoctor = async (req, res) => {
    try {
        const { nombre, apellido, especialidad, email, telefono } = req.body;

        const doctor = new Doctor({
            nombre,
            apellido,
            especialidad,
            email,
            telefono,
        });

        await doctor.save();

        res.status(201).json({ mensaje: 'Doctor creado exitosamente', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al crear el doctor' });
    }
};

exports.obtenerTodosLosDoctores = async (req, res) => {
    try {
        const doctores = await Doctor.find();
        res.status(200).json(doctores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener los doctores' });
    }
};

exports.obtenerDoctorPorId = async (req, res) => {
    try {
        const id = req.params.id;

        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(404).json({ mensaje: 'Doctor no encontrado' });
        }

        res.status(200).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener el doctor' });
    }
};

exports.modificarDoctor = async (req, res) => {
    try {
        const id = req.params.id;

        const doctorActualizado = await Doctor.findByIdAndUpdate(id, req.body, { new: true });

        if (!doctorActualizado) {
            return res.status(404).json({ mensaje: 'Doctor no encontrado' });
        }

        res.status(200).json({ mensaje: 'Doctor actualizado exitosamente', doctor: doctorActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al modificar el doctor' });
    }
};

exports.eliminarDoctor = async (req, res) => {
    try {
        const id = req.params.id;

        await Doctor.findByIdAndDelete(id);

        res.status(200).json({ mensaje: 'Doctor eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el doctor' });
    }
};
