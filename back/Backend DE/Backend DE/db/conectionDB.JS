const mongoose = require('mongoose');


let conexion = "mongodb+srv://valenthina:1005541262@atlascluster.c2dypqf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(conexion)
    .then(event => console.log ("Conectando a mongo"))
    .catch(error => console.log(error));


module.exports = mongoose;
