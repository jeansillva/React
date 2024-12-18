import { userState } from 'react'

function Form (){

    function cadastrarUsuario(e){
        e.preventDefault() //Para o comportamento HTML e imprime o console
        console.log()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = userState()
    //name = nome do campo que vai ser lido
    //setName = vai atribuir um valor para alerar name
    const [password, setPassword] = userState()

    return(
        <div>
            <h1>Meu Cadastro</h1>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form