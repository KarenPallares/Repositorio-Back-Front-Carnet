const express = require('express');
const Registro = require('../models/Registro');
const RegistroRouters = express.Router();

//Listar Registro 
RegistroRouters.get("/", (req,res)=>{
    Registro.find()
        .then((datos) => res.json({Registro:datos}))
        .catch(error=>res.json({mensaje:error}));
});


//Obtener Registro por un id
RegistroRouters.get("/:id", (req,res)=>{
    Registro.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});


//Guardar Registro 
RegistroRouters.post("/", (req,res)=>{
    const registro = new registro(req.body);
    registro.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}));
})

//Modificar Registro
RegistroRouters.patch("/", (req,res)=>{
    const  registro = new registro(req.body);
    registro.updateOne({_id: Registro._id}, Registro)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Registro
RegistroRouters.delete("/:id", (req,res)=>{
    Registro.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


//Obtener Registro por Id
RegistroRouters.get("/:id", (req,res)=>{
    Registro.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});



module.exports = RegistroRouters;