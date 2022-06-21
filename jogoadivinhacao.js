/*  Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor) */

// Cria variável para receber número aleatório entre 0 e 100
let numSecreto = Math.floor(Math.random() * 100 + 1)

// Cria variáveis e inicializa com valores
let numDigitado = -1
let numTentantivas = 0

    // Cria condição para repetição
    while(numDigitado != numSecreto){

	// Recebe valor do palpite
        numDigitado = Number(prompt("Qual seu palpite? "))

	// Caso palpite seja acima
        if(numDigitado > numSecreto){

	    // Mostra mensagem
            alert("Palpite acima!")

        }
        
        // Caso palpite seja abaixo
        if(numDigitado < numSecreto){

	    // Mostra mensagem
            alert("Palpite abaixo!")

        }

	// Soma 1 ao número de tentativas
        numTentantivas++

    }

    // Mostra mensagem final com o número de tentativas
    alert(`Acertou! Jogo encerrado com ${numTentantivas} tentativas! :D`)
