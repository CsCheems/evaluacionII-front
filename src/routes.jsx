import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Categorias from './Categorias/categorias'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Categorias/>}/>
        <Route path='/Categoria/:id' element={<Categorias/>}/>
    </Routes>
  )
}
