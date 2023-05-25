
const url = "http://localhost:5000/Empleados/";

export async function getlistaEmpleados(){
    const res = await fetch (url);
    const data = await res.json();
    return data.empleados;
}

export async function agregarEmpleados(empleados){
    const res = await fetch (url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(empleados)
    });
    const data = await res.json();
    return data;
}

export async function actualizarEmpleados(empleados){
    const res = await fetch (url,{
        method: 'PATCH',
        headers: {'content-type':'aplication/json'},
        body: JSON.stringify(empleados)
    });
    const data = await res.json();
    return data;
}






