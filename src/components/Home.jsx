import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  return (
    <div className='app'>
        <h1>FAP - TURMA 10 - LISTA DE EXERCÍCIOS EM JS</h1>
        <div className="container">
            <ul>
                <li><Link to={'/conversor'}>Conversor de Moedas</Link></li>
                <li><Link to={'/verificador'}>Verificador (Par/Impar)</Link></li>
                <li><Link to={'/veri-num'}>Verificador (Maior/Menor)</Link></li>
                <li><Link to={'/calc-media'}>Calculadora de Média</Link></li>
                <li><Link to={'/bilheteria'}>Bilheteria</Link></li>
                <li><Link to={'/chat-app'}>Chat Boot</Link></li>
                <li><Link to={'/horas-trab'}>Calc Horas Trabalhadas</Link></li>
                <li><Link to={'/calculadora'}>Calculadora</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Home