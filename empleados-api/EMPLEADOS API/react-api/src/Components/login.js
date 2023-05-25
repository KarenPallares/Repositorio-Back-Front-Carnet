
import React from 'react';
import {getListaUsuarios} from '../../API/EmpleadosAPI';


function Login(){
    const ingresar = (e) =>{
        e.preventDefault();
        getListaUsuarios().then((data)=>{
            if(data==null){
                console.log("error");
            }else{
                console.log(data);
            }
        }).catch((err)=>{console.log(err)})
    }
        return(
            <div>
                <button onClick={ingresar}>Prueba</button>
            </div>
        )

}

export default Login;