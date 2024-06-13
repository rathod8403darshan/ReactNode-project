import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import FormData from '../components/FormData1'
import TableData from '../components/TableData'
import { RagisterForm } from '../components/ragister/RagisterForm'
import Login from '../components/ragister/Login'

const Router = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
       <Route path="/ragister" element={<RagisterForm/>} />
       <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Navigate to={"/form"}/>}> </Route>
        <Route path="/form" element={<FormData/>}> 
        <Route path=':id'/>
        </Route>
        <Route path="/table" element={<TableData/>}>
           
           </Route>
      </Routes>
    </BrowserRouter>

    </>        
)
}

export default Router