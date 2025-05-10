import { useState } from 'react'
import './App.css'
import Inicio from './pages/inicio'
import Navbar from './components/navbar.jsx'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return <Inicio/>;
}

export default App
