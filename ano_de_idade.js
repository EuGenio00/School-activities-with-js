/* Criar um programa que calcula o ano de idade. Caso a idade for maior ou igual a 21 mostrar na tela (maioridade), caso contrário mdizer que é menor de idade.*/

// Criar as variáveis
let ano, nascimento
let idade 

// Armazena as variáveis
ano = Number(prompt('em que ano estamos? '))
nascimento = Number(prompt('em que ano nasceu? '))


// faz o cálculo e mostre o reultado na tela
    idade = ano - nascimento

        alert(`Em ${ano} você terá ${idade} anos.`)
        
        if(idade >= 21){

            alert('Atingiu a maioridade')
         
        }else{

            alert('Menor de idade :(')
        }

// Fim da execução.



