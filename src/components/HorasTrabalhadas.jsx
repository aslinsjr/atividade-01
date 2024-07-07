import { useState } from 'react'
import { Link } from 'react-router-dom'

import './HorasTrabalhadas.css'

const HorasTrabalhadas = () => {

    const [salarioBase, setSalarioBase] = useState(0)
    const [cargaHoraria, setCargaHoraria] = useState(0)
    const [horasTrabalhadas, setHorasTrabalhadas] = useState(0)

    return (
        <div className='app'>
            <h1>Calculadora de Horas Trabalhadas</h1>
            <div className="container">
                <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
                    <label>Informe o salário base:
                        <input type="text" id='salario' onChange={(e) => setSalarioBase(+e.target.value)}/>
                    </label>
                    <label>Informe a carga horária semanal base:
                        <input type="text" id='carga' onChange={(e) => setCargaHoraria(+e.target.value)}/>
                    </label>
                    <label>Informe a quantidade de horas trabalhadas no mês:
                        <input type="text" id='horas' onChange={(e) => setHorasTrabalhadas(+e.target.value)}/>
                    </label>
                </form>
                <div className="result-container">
                    <div className="result-control">
                        <h2>Sua hora de trabalho é:</h2>
                        <span>{"R$ " + (salarioBase / (cargaHoraria * 4)).toFixed(2)}</span>
                    </div>
                    <div className="result-control">
                        <h2>Seu salário esse mês foi:</h2>
                        <span>{(((horasTrabalhadas - (cargaHoraria * 4)) * (salarioBase / (cargaHoraria * 4))) + salarioBase)}</span>
                    </div>
                    <div className="result-control">
                        <h2>Você recebeu <span>{"R$ " + ((horasTrabalhadas - (cargaHoraria * 4)) * (salarioBase / (cargaHoraria * 4))).toFixed(2)}</span> de hora extra</h2>
                    </div>
                </div>
            </div>
            <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
        </div>
    )
}

export default HorasTrabalhadas