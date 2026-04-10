import React, { use } from 'react'
import { useState } from 'react'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Cardcomp from './components/Cardcomp'
import Editcard from './components/Editcard'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
export default function App() {
  

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/form" element={ <Form/>} />
        <Route path="/dis" element={<Cardcomp/>} />      
        <Route path="/edit/:id" element={<Editcard/>} />      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
