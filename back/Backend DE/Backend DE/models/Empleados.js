const mongoose = require ('../db/conectionDB.JS');

const Empleados = mongoose.Schema({
    rol:{
        type: String,
        required: true,

    },
    usuario:{
        type: String,
        required: true,

    },
    clave:{
        type: String,
        required: true,

    },codigo:{
        type: String,
        required: true,

    },
    nombre:{
        type: String,
        required: true,

    },
    apellido:{
        type: String,
        required: true,

    },
    cedula:{
        type: Number,
        required: true,

    },
    celular:{
        type: Number,
        required:true,

    },
    fechaNacimiento:{
        type: Date,
        required: true,
    },
    nom_departamento:{
        type: String,
        required: true,
    },
    nom_servicio:{
        type: String,
        required: true,
    }, 
    registro: [{   
        fechadiaria:{
            type: Date,
            required: true,
    
        },
        hora_Entrada:{
            type: String,
            required: true,
    
        },
        hora_Salida:{
            type: String,
            required: true,
    
        }
        }]

},{
    collection:"Empleados",
    versionKey: false
});

module.exports = mongoose.model('Empleados', Empleados);



