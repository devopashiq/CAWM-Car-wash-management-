import { useState } from 'react'
import React from 'react';
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Signin from './Auth/Signin'
import ForgotPassword from './Auth/ForgotPassword'
import ResetPassword from './Auth/ResetPassword'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
     </Routes>
    </>
  )
}

export default App
