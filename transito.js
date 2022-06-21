
/* Criar um programa que simule o departamento de trânsito. Calcule o ano de idade, caso a idade for maior ou igual a 18 anos, mostrar na tela "Pode emitir carteira de transito". Caso contrário, mostrar que n]ao pode emitir. */

alert('>>> Departamento de transito <<<')

// Criar as variáveis
let anoNascimento, anoAtual
let mediaTransito

// Armazena as variáveis

anoNascimento = Number(prompt('seu ano de nascimento: '))
anoAtual = Number(prompt('ano atual: '))

// Faz o cálculo

    mediaTransito = anoAtual - anoNascimento

// Estabeleça a condição e mostre o resultado na tela

    if(mediaTransito >= 18){

        alert(`${mediaTransito}anos:\nPode emitir a carteira de transito:)`)
    
    }else{

        alert(`${mediaTransito}anos\n\nMENOR DE IDADE.\nNão pode emitir a carteira!`)
    }

// Fim da execução.


