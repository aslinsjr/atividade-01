import { useState } from 'react'
import { Link } from 'react-router-dom'

import './CalculadorMedia.css'

const CalculadorMedia = () => {

    const [primeiraNota, setPrimeiraNota] = useState(0)
    const [segundaNota, setSegundaNota] = useState(0)

    const [resultado, setResultado] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let media = (primeiraNota + segundaNota) / 2;

        if(media >= 6) {
            setResultado("Aprovado")
        } else {
            setResultado("Reprovado")
        }

        console.log(media)
    } 

  return (
    <div className='app'>
        <h1>Calculadora de Média</h1>
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Informe a primeira nota: 
                    <input type="text"  id='primeira-nota' onChange={(e) => setPrimeiraNota(+e.target.value)} placeholder='ex. 6.5'/>
                </label>
                <label>Informe a segunda nota: 
                    <input type="text"  id='segunda-nota' onChange={(e) => setSegundaNota(+e.target.value)} placeholder='ex. 8.5'/>
                </label>
                <input type="submit" value="Calcular média"/>
            </form>
            <div className="result-container">
                <h2>Você foi</h2>
                <span>{resultado}</span>
                <h2>E sua média foi</h2>
                <span>{(primeiraNota + segundaNota) / 2}</span>
            </div>
        </div>
        <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
    </div>
  )
}

export default CalculadorMedia