const express = require('express');
const Empleados = require('../models/Empleados');
const EmpleadosRouters = express.Router();

//Listar Empleados
EmpleadosRouters.get("/", (req,res)=>{
    Empleados.find()
        .then((datos) => res.json({Empleados:datos}))
        .catch(error=>res.json({mensaje:error}));
});


//Obtener Empleados por id
EmpleadosRouters.get("/:id", (req,res)=>{
    Empleados.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});


//Guardar Empleado
EmpleadosRouters.post("/", (req,res)=>{
    const Empleado = new Empleados(req.body);
    Empleado.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}));
})

//Modificar Empleado
EmpleadosRouters.patch("/", (req,res)=>{
    const  Empleados = new Empleados(req.body);
    Empleados.updateOne({_id: Empleados._id}, Empleados)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Empleado
EmpleadosRouters.delete("/:id", (req,res)=>{
    Empleados.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


//Obtener Empleados por id
EmpleadosRouters.get("/:id", (req,res)=>{
    Empleados.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});



module.exports = EmpleadosRouters;