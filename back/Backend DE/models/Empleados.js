const mongoose = require ('../db/conectionDB.JS');

const Empleados = mongoose.Schema({
    Nombre:{
        type: String,
        required: true,

    },
    Apellido:{
        type: String,
        required: true,

    },
    Cedula:{
        type: Number,
        required: true,

    },
    Celular:{
        type: Number,
        required:true,

    },
    FechaNacimiento:{
        type: Date,
        required: true,
    },
    Nom_departamento:{
        type: String,
        required: true,
    },
    Nom_servicio:{
        type: String,
        required: true,
    }

},{
    collection:"Empleados",
    versionKey: false
});

module.exports = mongoose.model('Empleados', Empleados);

