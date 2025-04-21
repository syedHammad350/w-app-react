import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Weather } from './Component/weather'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <Routes>
      <Route path='/'element={<Weather/>}/>
    </Routes>
  )
}

export default App
