import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ChatApp.css'

const ChatApp = () => {

    const [mensagemArray, setMensagemArray] = useState([])
    const [mensagem, setMensagem] = useState("")

    function chating() {
        if(mensagem === "Olá" || mensagem ==="Oi" || mensagem === "Bom dia" || mensagem === "Boa tarde" || mensagem === "Boa noite") {

            let response = 'Olá, escolha seu atendimento: 1 - Novo Agendamento | 2 - Remarcação | 3 - Cancelamento '

            setMensagemArray(prevMensagemArray => [...prevMensagemArray, response])

            setMensagem("")
        }

        if(mensagem === "1") {

            let response = 'Indique um dia para agendar seguindo o exemplo: 23/07/2024'

            setMensagemArray(prevMensagemArray => [...prevMensagemArray, response])

            setMensagem("")
        }
    }

    function handleChanges(e) {
        const mensageInput = document.querySelector("#mensagem")

        setMensagem(e.target.value)

        if(e.key === "Enter") {
            
            setMensagemArray(prevMensagemArray => [...prevMensagemArray, mensagem])

            mensageInput.value = ""

            setTimeout(() => {
                chating()
            }, 1000)
        }

    }
        

  return (
    <div className='app'>
        <h1>Chat Boot</h1>
        <div className="container chat">
            <div className="menssage-box">
                {mensagemArray.map((menssage) => {
                        return <span className='menssage' key={menssage}>{menssage}</span>
                    })
                }
            </div>
            <div className='input-box'>
                <input type="text" id='mensagem'  placeholder='mensagem' onKeyUp={(e) => handleChanges(e)}/>
            </div>
        </div>
        <button id='return-btn'><Link to={"/"}>Voltar ao menu principal</Link></button>
    </div>
  )
}

export default ChatApp