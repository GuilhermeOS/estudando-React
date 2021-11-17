import { useState } from 'react'

function Form () {

    function cadastrarUsuario(e) {

        e.preventDefault()
        alert(`Cadastrou usuário ${name}`)
        alert(`Cadastrou usuário senha = ${password}`)
    }

    const [name, setName] = useState()
    // o setName pega o valor, o name salva o valor pego pelo setName
    const [password, setPassword] = useState()

    return (
        <div>
            <h2>Cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Digite seu nome" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="pass">Senha: </label>
                    <input type="password" placeholder="Digite sua senha" id="pass" name="pass" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form