import React, {useState, useEffect} from "react"
import Navegador from "../Generales/Navegador";
import TablaEmpleados from './TablaEmpleados'
import { actualizarEmpleados, agregarEmpleados, eliminarEmpleado, getlistaEmpleados } from "../API/EmpleadosAPI"
import FormEmpleados from './FormEmpleados'
import { useNavigate} from 'react-router-dom';

function empleados(){
    const navegar = useNavigate();
    const [ empleadoActivo, setEmpleadoActivo] = useState(null)

    useEffect(() => {
        setEmpleadoActivo(localStorage.getItem("empleadoActivo"));
        if(localStorage.getItem("empleadoActivo") == null)
        navegar("/login")
    }, [navegar, empleadoActivo])

    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState(null);
    const [mostrarLista, setMostarLista] = useState(true);



    const listar = () => {
        getlistaEmpleados().then((data) => {setEmpleados(data)}).catch((err) => {console.log(err)})
    }

    if(empleados.length === 0)
    listar();

    const verLista = (e) => {
        if(mostrarLista){
            setMostarLista(false);
        }
        else{
            setMostarLista(true);
            setEmpleado({
                _id:null,
                documento: "",
                nombre: "",
                apellido: "",
                telefono: "",
                fecha_nacimiento: "",
                rol: "",
                departamento: "",   
                servicios: "",
                registro: {
                    _id:"",
                    fecha_ingreso:"",
                    fecha_salida:"",
            }
            })
        }
    }

    const guardar = (empleado)=>{
        if(empleado_id === null){
            agregarEmpleados(empleado).then((data) => {listar()}).catch((err) => {console.log(err)})
    }else{
        actualizarEmpleados(empleado).then((data) => listar()).catch((err) => {console.log(err)})
    }
    setMostarLista(true);
}

const eliminar =(id) => {
    eliminarEmpleado(id).then((data) =>{
        if (data.deletedCount === 1)
        listar();
    }).catch((err) => {console.log(err)})
}

const ver = (empleado)=>{
    setEmpleado(empleado);
    setMostarLista(false);
}
    }
