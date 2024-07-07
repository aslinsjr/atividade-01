import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ConversorApp.css'

const ConversorApp = () => {

    const [cotacao, setCotacao] = useState(0)
    const [valorConvertido, setValorConvertido] = useState(0)
    const [result, setResult] = useState(0)

    function handleChanges(e) {

        if(e.target.id === "cotacao") {
            setCotacao(+e.target.value)
        }

        if(e.target.id === "valor-convertido") {
            setValorConvertido(+e.target.value)

            console.log(valorConvertido)
        }

        setResult((valorConvertido / cotacao).toFixed(2))   
    }

  return (
    <div className='app'>
        <h1>Conversor</h1>
        <div className="container">
            <form>
                <label>Insira a cotação atual do dólar:
                    <div className="input-control">
                    <span>$</span>
                    <input type="text" id='cotacao' placeholder='ex. 4.5' onChange={(e) => handleChanges(e)}/>
                    </div>
                </label>
                <label>Insira o valor a ser convertido em Reais:
                    <div className='input-control'>
                    <span>R$</span>
                    <input type="text" id='valor-convertido' placeholder='ex. 1000.00' onChange={(e) => handleChanges(e)}/>
                    </div>
                </label>
            </form>
            <div className="result-container">
                <h2>O valor convertido é</h2>
                <div className="result-control">
                <span>$</span>
                <span id='result'>{result}</span>
                </div>
            </div>
        </div>
        <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
    </div>
  )
}

export default ConversorApp