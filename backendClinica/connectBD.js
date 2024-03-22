const mongoose = require ("mongoose");
const User = require('./Models/usuarioModel')

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb+srv://javier17utn:2BjhO25Qd8nkLcpP@cluster0.ekwkpqs.mongodb.net/clinica ');
        console.log(`Database Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}


module.exports = connectDB