import { useState} from "react"
import { Link } from 'react-router-dom'

import './CalculadoraApp.css'

const CalculadoraApp = () => {

  const [array, setArray] = useState([])
  const [number, setNumber] = useState(0)
  const [prevNumber, setPrevNumber] = useState(0)
  const [operacao, setOperacao] = useState("")
  const [result, setResult] = useState(0)

  function handleClick(e) {
    if(result) {
      setPrevNumber(result)
    } else {
      setPrevNumber(+(array.toString()).replace(/,/g , ""))
    }
    
    setOperacao(e.target.id)

    setArray([])

    if(e.target.innerText === "=") {
      
      if(operacao === "soma") {
        setResult(+(array.toString()).replace(/,/g , "") + prevNumber)
      }

      if(operacao === "subtracao") {
        setResult(+(array.toString()).replace(/,/g , "") - prevNumber)
      }

      if(operacao === "multiplicacao") {
        setResult(+(array.toString()).replace(/,/g , "") * prevNumber)
      }

      if(operacao === "divisao") {
        setResult(+(array.toString()).replace(/,/g , "") / prevNumber)
      }
    }
  }

  return (
    <div className='app'>
        <h1>Calculadora</h1>
        <div className="container calc">
            <div className="visor">
              <h2>{result ? result : (array.toString()).replace(/,/g , "")}</h2>
            </div>
            <div className="buttons-control">
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>1</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>2</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>3</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>4</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>5</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>6</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>7</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>8</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>9</button>
              <button onClick={(e) => setArray(prevArray => [...prevArray, e.target.innerText])}>0</button>
              <button id="soma" onClick={(e) => handleClick(e)}>+</button>
              <button id="subtracao" onClick={(e) => handleClick(e)}>-</button>
              <button id="divisao" onClick={(e) => handleClick(e)}>/</button>
              <button id="multiplicacao" onClick={(e) => handleClick(e)}>x</button>
              <button onClick={(e) => handleClick(e)}>=</button>
            </div>
        </div>
        <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
    </div>
  )
}

export default CalculadoraApp