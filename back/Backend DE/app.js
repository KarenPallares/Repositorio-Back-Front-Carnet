const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const EmpleadosRouters = require('./routers/EmpleadosRouters');
const RegistroRouters = require('./routers/RegistroRouters');
const app= express();

app.use(cors());
app.use(bodyParser.json());

//Empleados
app.use("/Empleados", EmpleadosRouters);

//Registro
app.use("/Registro", RegistroRouters);



const PORT = process.env.PORT || 5000;
app.listen(PORT);