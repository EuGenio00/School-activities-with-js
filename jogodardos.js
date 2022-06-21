/* Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado. */

// Cria variáveis para armazenar valores
let arremessoVez, percentual, totalPontos = 0

    // Cria loop de 6 vezes
    for(i=0; i < 6; i++){

	// Recebe pontos do arremesso da vez e armazena
        arremessoVez = Number(prompt("Pontos do arremesso: "))

        // Armazena o total de pontos atual
        totalPontos += arremessoVez

    }

    // Calcula o percentual de pontos
    percentual = ((totalPontos * 100) /60).toFixed(2)

    // Verifica se os pontos atingiram o mínimo para se classificar	
    if(totalPontos >= 45){

	// Mostra mensagem com pontos, percentual e status
        alert(`Total de pontos ${totalPontos}, percentual ${percentual}%. Classificado!`)

    // Verifica se os pontos não atingiram o mínimo para se classificar
    }else if (totalPontos < 30){

	// Mostra mensagem com pontos, percentual e status
        alert(`Total de pontos ${totalPontos}, percentual ${percentual}%. Desclassificado!`)

    // Senão
    }else{

	// Mostra mensagem com pontos, percentual e status
        alert(`Total de pontos ${totalPontos}, percentual ${percentual}%. Repescagem!`)

    }