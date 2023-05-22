const mongoose = require ('../db/conectionDB.JS');

const Registro = mongoose.Schema({   
    fechadiaria:{
        type: Date,
        required: true,

    },
    Hora_Entrada:{
        type: String,
        required: true,

    },
    Hora_Salida:{
        type: String,
        required: true,

    },
    Empleados:{
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
    
        }
    }
},{
    collection:"Registro",
    versionKey: false
});

module.exports = mongoose.model('Registro', Registro);

    
    
    
    