import React, {useState, useEffect} from 'react'

function FormEmpleados(props){
    const {getEmpleados, setEmpleados, onSave, registrar=false} = props;
    const [verRol, verrol] = usesState(gfalse);
    const [user, setUser] = useState({
        _id: null,
        documento: "",
        nombre: "",
        apellido: "",
        telefono: "",
        fecha_nacimiento: "",
        rol: "",
        departamento: "",
        servicios: "",
        registro: "",
            _id: "",
            fecha_ingreso: "",
            fecha_salida: "",
    

    });

const limpiar = ()=>{
    setUser({
        _id: null,
        documento: "",
        nombre: "",
        apellido: "",
        telefono: "",
        fecha_nacimiento: "",
        rol: "",
        departamento: "",
        servicios: "",
        registro: "",
            _id:"",
            fecha_ingreso:"",
            fecha_salida:"",


    })
};

useEffect(() => {

    if(setEmpleados)
    setUser(setEmpleados)
}, [setEmpleados])

if(user === null){
    limpiar();

}
const handleChange = (e)=>{
    setUser([
        ...user, [e.target.name] : e.target.value
    });

    console.log(e.target.value);
    if(e.target.name === "rol"){
        if(e.target.value === "Coordinador")
        setVerRol(true);
        else
        setVerRol(false);
        
    }
    getEmpleados(user);
};

const handleChangeRegistro = (e)=>{
    setUser({
        ...user, registro: {
            [e.target.name] : e.target.value
        }
    });
    getRegistro(user);
};

const onClickGuardar = (e)=>{
    e.preventDefault();
    onSave(user);
    limpiar();

};    

return(
    <div>
        <form>
            <div className='row'>
                <div className='col'>
                <label className="form-label">documento:</label>
                <input className="form-control" type="text" name="documento" value={user.documento} onChange={(e)={handleChange(e)}}/>
                    </div>
                <div className='col'>
                <label className="form-label">nombre:</label>
                <input className="form-control" type="text" name="nombre" value={user.nombre} onChange={(e)={handleChange(e)}}/>
                    </div>
                <div className='col'>
                <label className="form-label">apellido:</label>
                <input className="form-control" type="text" name="apellido" value={user.apellido} onChange={(e)={handleChange(e)}}/>
                    </div>
                <div className='col'>
                <label className="form-label">telefono:</label>
                <input className="form-control" type="text" name="telefono" value={user.telefono} onChange={(e)={handleChange(e)}}/>
                    </div>
                    <div className='col'>
                <label className="form-label">fecha_nacimiento:</label>
                <input className="form-control" type="text" name="documenfecha_nacimientoto" value={user.fecha_nacimiento} onChange={(e)={handleChange(e)}}/>
                    </div>
                </div>
                <div className="row">
                <div className='col'>
                <label className="form-label">fecha_ingreso:</label>
                <input className="form-control" type="text" name="fecha_ingreso" value={user.fecha_ingreso} onChange={(e)={handleChange(e)}}/>
                    </div>
                     <div className='col'>
                <label className="form-label">fecha_salida:</label>
                <input className="form-control" type="text" name="fecha_salida" value={user.fecha_salida} onChange={(e)={handleChange(e)}}/>
                    </div>
                    </div>
                
                
                
                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

            </div>
        </form>
    </div>
)