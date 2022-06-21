/* Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados (somente valores entre 1 e 13 são válidos). Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).*/

// Cria variáveis para armazenar valores
let jogadorUm, jogadorDois
let valorCarta

// Cria variáveis e inicializa com valores
let totalUm = 0
let totalDois = 0

    // Recebe os nomes dos jogadores e armazena
    jogadorUm = prompt("Digite o nome do jogador um: ")
    jogadorDois = prompt("Digite o nome do jogador dois: ")

    // Cria loop de 5 vezes	
    for(i=5; i > 0; i--){

        // Zera o valor da carta
        valorCarta = 0

        // Cria loop para validar valor da carta
        while(valorCarta < 1 || valorCarta > 13){

	    // Recebe o valor da carta
            valorCarta = Number(prompt(`\n${jogadorUm}, é a sua vez!\n\nQual o valor da sua carta?`))

            // Verifica se o valor está entre 1 e 13
            if(valorCarta >= 1 && valorCarta <= 13){

		// Se sim, soma o valor da carta ao total do jogador
                totalUm += valorCarta

            // Senão 
            }else{

                // Mostra mensagem de inválido
                alert("APENAS CARTAS DE 1 a 13! >.<")

            }

        }

	// Zera o valor da carta
        valorCarta = 0

	// Cria loop para validar valor da carta
        while(valorCarta < 1 || valorCarta > 13){

	    // Recebe o valor da carta
            valorCarta = Number(prompt(`\n${jogadorDois}, é a sua vez!\n\nQual o valor da sua carta?`))

	    // Verifica se o valor está entre 1 e 13
            if(valorCarta >= 1 && valorCarta <= 13){

		// Se sim, soma o valor da carta ao total do jogador
                totalDois += valorCarta

	    // Senão
            }else{
		
                // Mostra mensagem de inválido
                alert("APENAS CARTAS DE 1 a 13! >.<")

            }

        }

    }

    // Verifica se o total do jogador um é maior que o total do jogador 2
    if(totalUm > totalDois){

	// Mostra totais de pontos e o vencedor
        alert(`\n${jogadorUm} somou um total de ${totalUm} pontos!\n${jogadorDois} somou um total de ${totalDois} pontos!\n\n${jogadorUm} venceu! :D`)

    // Verifica se o total do jogador um é menor que o total do jogador 2
    }else if(totalUm < totalDois){

	// Mostra totais de pontos e o vencedor
        alert(`\n${jogadorUm} somou um total de ${totalUm} pontos!\n${jogadorDois} somou um total de ${totalDois} pontos!\n\n${jogadorDois} venceu! :D`)

    // Senão, empate
    }else{

	// Mostra totais de pontos mensagem de empate
        alert(`\n${jogadorUm} somou um total de ${totalUm} pontos!\n${jogadorDois} somou um total de ${totalDois} pontos!\n\nO jogo empatou! :|`)

    }