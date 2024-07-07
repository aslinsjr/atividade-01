import { useState } from 'react'
import { Link } from 'react-router-dom'

import './VerificadorApp.css'

const VerificadorApp = () => {

    const [numero, setNumero] =  useState(0)

    function handleClick(e) {
        e.preventDefault()
        
        const parBox = document.querySelector("#par")
        const imparBox = document.querySelector("#impar")

        if(numero % 2 === 0) {
            parBox.style.opacity = "1"
            imparBox.style.opacity = "0.5"
        }else {
            imparBox.style.opacity = "1"
            parBox.style.opacity = "0.5"
        }

    }

  return (
    <div className='app'>
        <h1>Verificador</h1>
        <div className="container veri" >
            <form>
                <label>Insira um número inteiro para ser verificado
                    <input type="text" placeholder='ex. 8'  onChange={(e) => setNumero(+e.target.value)}/>
                </label>
                <button onClick={(e) => handleClick(e)}>Verificar</button>
            </form>
            <div className="result-container">
                <div className="par-box">
                    <span id='par'>Par</span>
                </div>
                <div className="impar-box">
                    <span id='impar'>Impar</span>
                </div>
            </div>
        </div>
        <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
    </div>
  )
}

export default VerificadorApp