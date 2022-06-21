/* Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120). */

// Cria variáveis e inicializa com os valores
let num
let cont = 1
let fatorial = 1

    // Recebe o número a ser fatorado 	 
    num = Number(prompt("Digite o número a ser fatorado: "))

    // Cria loop para calcular
    while (cont <= num){

        // Faz o cálculo
        fatorial = fatorial * cont
        
        // Aumenta o contador
        cont++

    }

// Mostra mensagem com o resultado
alert(`O valor do fatorial de ${num} é ${fatorial}.`)
