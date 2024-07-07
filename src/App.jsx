import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css'

import ConversorApp from './components/ConversorApp'
import VerificadorApp from './components/VerificadorApp'
import VerificadorNumerico from './components/VerificadorNumerico'
import CalculadorMedia from './components/CalculadorMedia'
import BilheteriaApp from './components/BilheteriaApp'
import ChatApp from './components/ChatApp'
import HorasTrabalhadas from './components/HorasTrabalhadas'
import CalculadoraApp from './components/CalculadoraApp'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/conversor' element={<ConversorApp />} />
          <Route path='/verificador' element={<VerificadorApp />} />
          <Route path='/veri-num' element={<VerificadorNumerico />} />
          <Route path='/calc-media' element={<CalculadorMedia />} />
          <Route path='/chat-app' element={<ChatApp />} />
          <Route path='/bilheteria' element={<BilheteriaApp />} />
          <Route path='/horas-trab' element={<HorasTrabalhadas />} />
          <Route path='/calculadora' element={<CalculadoraApp />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>  
    </div>
  )
}

export default App
