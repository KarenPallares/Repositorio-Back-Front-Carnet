import React from 'react'

function TableEmpleados(props){
    const{usuarios, onDlete, onView} = props;
return (
    <table className="table table-striped">
        <thead className="table-primary">
            <tr>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Fecha_Nacimiento</th>
                <th>Rol</th>
                <th>Departamento</th>
                <th>Serivicio</th>
                <th>Registro</th>
            </tr>
        </thead>
        <tbody>
            {empleados.map((empleados)=>{
                return(<tr key={empleados._id}>
                <td>{empleados.documento}</td>
                <td>{empleados.nombre}</td>
                <td>{empleados.apellidos}</td>
                <td>{empleados.telefono}</td>
                <td>{empleados.rol}</td>
                <td>{empleados.depatamento}</td>
                <td>{empleados.serivicio}</td>
                <td>{empleados.registro}</td>
                    <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>{onDlete(empleados._id)}}>Eliminar</button>
                    <button className="btn btn-secondary btn-sm" onClick={()=>{onView(empleados._id)}}>Ver</button>
                     </td>
                     </tr>)
                })}      
        </tbody>
    </table>
)
            }

export default TableEmpleados

