import { useState } from 'react'
import { Link } from 'react-router-dom'

import './VerificadorNumerico.css'

const VerificadorNumerico = () => {

    const [primeiroNumero, setPrimeiroNumero] = useState(0)
    const [segundoNumero, setSegundoNumero] = useState(0)
    const [terceiroNumero, setTerceiroNumero] = useState(0)

    const [maiorNumero, setMaiorNumero] = useState(0)

    function verificador() {

        let lista = [primeiroNumero, segundoNumero, terceiroNumero]

        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];

            if (element > maiorNumero) {
                setMaiorNumero(element)
            }

        }

    }

    verificador()

    return (
        <div className='app'>
            <h1>Verificador de Números</h1>
            <div className="container">
                <form>
                    <label>Insira o primeiro número:
                        <input type="text" id='primeiro-numero' onChange={(e) => setPrimeiroNumero(+e.target.value)} placeholder='ex. 23.6' />
                    </label>
                    <label>Insira o segundo número:
                        <input type="text" id='segundo-numero' onChange={(e) => setSegundoNumero(+e.target.value)} placeholder='ex. 23.6' />
                    </label>
                    <label>Insira o terceiro número:
                        <input type="text" id='terceiro-numero' onChange={(e) => setTerceiroNumero(+e.target.value)} placeholder='ex. 23.6' />
                    </label>
                </form>
                <div className="result">
                    <h2>O maior número é: </h2>
                    <span>{maiorNumero}</span>
                </div>
            </div>
            <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
        </div>

    )
}

export default VerificadorNumerico