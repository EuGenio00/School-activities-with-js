
alert('SEJA BEM VINDO/A AO CADASTRO DE DOAÇÃO PARA O DIA DAS CRIANÇAS')
// Criar as variáveis
let login, doacao

// Armazena as variáveis
login = prompt('Para iniciar digite seu nome: ')

doacao = Number(prompt('Muito obrigado por ajudar.\n\n[1] Para doar 10R$;\n[2] Para doar 25R$;\n[3] Para doar 50R$;\n[4] Para doar outros valores;\n[5] Para cancelar.'))
valor = 0

// Estabeleça a condição
switch(doacao){
    case 1:
        valor = 10
        break

    case 2:
        valor = 25
        break

    case 3:
        valor = 50
        break

    case 4:
        valor = Number(prompt('Digite o seu valor para doar: '))  
        break
      
    case 5:
        if(valor == 0){
            alert('Você cancelou sua doação!')
        }
        break

    default:
        alert('Precisa escolher uma das opções:(')
}
// Mostre o resultado na tela

alert(`A sua doação foi de ${valor}R$\nObrigado pela ajuda.`)

    if(valor >= 25){

        alert('A sua ajuda fez um diferencial:)')
        }

// Fim da execução.