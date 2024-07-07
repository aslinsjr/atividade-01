import { useState } from 'react'
import { Link } from 'react-router-dom'

import './BilheteriaApp.css'

const BilheteriaApp = () => {

    const [slide, setSlide] = useState(0)
    const [assento, setAssento] = useState("")
    const [combo, setCombo] = useState(false)
    const [valorIngresso, setValorIngresso] = useState(0)


    function handleSubmit(e) {
        e.preventDefault()

        setSlide(slide + 1)

        console.log(assento)
        console.log(combo)
    }

    function handleChanges(e) {

        if (e.target.id === "vip" && e.target.checked) {
            setAssento("Ingresso VIP")
            setValorIngresso(80)
        }

        if (e.target.id === "standard" && e.target.checked) {
            setAssento("Ingresso standard")
            setValorIngresso(40)
        }

        if (e.target.id === "combo" && e.target.checked) {
            setCombo(true)
            setValorIngresso(valorIngresso + 30)
        }
    }

    return (
        <div className='app'>
            <h1>Bilheteria</h1>
            <div className="container">
                {slide == 0 ?
                    <>
                        <form className='multi-form' onSubmit={(e) => handleSubmit(e)}>
                            <h2>Escolha o tipo de entrada:</h2>
                            <label>
                                <input name='assento' type="radio" id='vip' onChange={(e) => handleChanges(e)} />
                                <p>VIP (com uma poltrona)</p>
                            </label>
                            <label>
                                <input name='assento' type="radio" id='standard' onChange={(e) => handleChanges(e)} />
                                <p>Standard (cadeira comum)</p>
                            </label>
                            <input type="submit" value='Próxima' />
                        </form>
                    </> : <></>
                }
                {slide == 1 ?
                    <>
                        <form className='multi-form' onSubmit={(e) => handleSubmit(e)}>
                            <h2>Deseja combo de pipoca e refrigerante</h2>
                            <label>
                                <input name='combo' type="checkbox" id='combo' onChange={(e) => handleChanges(e)} />
                                <p>Combo Pipoca + Refrigerante</p>
                            </label>
                            <input type="submit" value='Próxima' />
                        </form>
                    </> : <></>
                }{slide == 2 ?
                    <>
                        <div className="result">
                            <h2>Você escolheu:</h2>
                            <span>{assento}</span>
                            {combo ? <span> com pipoca</span> : <span> sem pipoca</span>}
                            <h2>Valor:</h2>
                            <span>R$ {valorIngresso} reais</span>
                        </div>
                        <button onClick={() => window.location.reload()}>Voltar</button>
                    </> : <></>
                }
            </div>
            <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
        </div>
    )
}

export default BilheteriaApp