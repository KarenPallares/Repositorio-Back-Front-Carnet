import React from 'react'

import Login from './login'
import Home from  './Home'
import Empleados from '..API/Empleados'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function Router(){
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/' element={<Empleados/>}></Route>
                <Route path='/' element={<Login/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router