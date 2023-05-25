const express = require('express');
const Empleados = require('../models/Empleados');
const EmpleadosRouters = express.Router();

//Listar Empleados
EmpleadosRouters.get("/", (req, res) => {
    Empleados.find()
        .then((datos) => res.json({ Empleados: datos }))
        .catch(error => res.json({ mensaje: error }));
});


//Obtener Empleados por id
EmpleadosRouters.get("/:id", (req, res) => {
    Empleados.findById({ _id: req.params.id })
        .then((datos) => res.json(datos))
        .catch(error => res.json({ mensaje: error }))
});


//Guardar Empleado
EmpleadosRouters.post("/", (req, res) => {
    const empleado = new Empleados(req.body);
    empleado.save()
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(error => res.json({ mensaje: error }));
})

//Modificar Empleado
EmpleadosRouters.patch("/", (req, res) => {
    const Empleados = new Empleados(req.body);
    Empleados.updateOne({ _id: Empleados._id }, Empleados)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }))

})

//Eliminar Empleado
EmpleadosRouters.delete("/:id", (req, res) => {
    Empleados.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }))
});

//Obtener Empleados por id
EmpleadosRouters.get("/:id", (req, res) => {
    Empleados.findById({ _id: req.params.id })
        .then((datos) => res.json(datos))
        .catch(error => res.json({ mensaje: error }))
});


// Listar Registros de un Empleado
EmpleadosRouters.get("/:id/registros", (req, res) => {
    Empleados.findById(req.params.id).populate("registros")
        .then((datos) => res.json({ Registros: datos.registros }))
        .catch((error) => res.json({ mensaje: error }));
});

// Obtener Registro de un Empleado por id
EmpleadosRouters.get("/:id/registros/:idRegistro", (req, res) => {
    Registros.findById(req.params.idRegistro)
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ mensaje: error }));
});

//Guardar Registro
EmpleadosRouters.post("/", (req, res) => {
    const registro = new Registros (req.body);
    registro.save()
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(error => res.json({ mensaje: error }));
})

// Modificar Registro de un Empleado
EmpleadosRouters.patch("/:id/registros/:idRegistro", (req, res) => {
    Registros.updateOne({ _id: req.params.idRegistro }, req.body)
        .then((datos) => res.json(datos))
        .catch((error) => res.json({ mensaje: error }));
});

//Eliminar registro de un Empleado
EmpleadosRouters.delete("/:id", (req, res) => {
    Registros.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }))
});

module.exports = EmpleadosRouters;




