import React from 'react'
import './styles/app.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './screens/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Matches from './screens/Matches'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/matches/:id' element={<Matches />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
