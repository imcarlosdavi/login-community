let nomes = []
let senhas = []
let continuar = true
let contador = 0


while(continuar){


    let decisao = parseInt(prompt("1 = Cadastro / 2 = Fazer login / 3 = Excluir / 4 = Encerrar"))

    switch(decisao){
        case 1:
            nomes[contador] = prompt("Coloque seu nome.")
            senhas[contador] = prompt("Coloque uma senha.")
            contador++;
    
            document.body.innerHTML += `Você foi cadastrado!`
            break;

        case 2:
            let nome = prompt("Qual é seu nome?")
            let senha = prompt("Qual é sua senha?")
            let loginInvalido = false

            for(let i = 0; i < nomes.length; i++){
                if(nome == nomes[i] && senha == senhas[i]){
                    loginInvalido = true
                }

            }

            if(loginInvalido){
                document.body.innerHTML += `Login feito com sucesso!`
            }else{
                alert("Login inválido.")
            }

            break;

        case 3:
            let nomeExcluir = prompt("Qual nome você deseja excluir?")
            let nomeAux = []
            let senhaAux = []
            let contadorAux = 0

            for(i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    document.body.innerHTML += `Cadastro excluído com sucesso.`
                }else{
                    nomeAux[contadorAux] = nomes[i]
                    senhaAux[contadorAux] = senhas[i]
                    contadorAux++;
                }
            }

            nomes = nomeAux
            senhas = senhaAux
            contador--;

            break;

        case 4:
            continuar = false
            break;
        default:
            document.body.innerHTML += `Usuário inválido.`
        break;
    }
}