/*Você vai assistir a um filme no cinema e decide comprar algumas guloseimas antes de entrar para a sessão. O cinema oferece pipoca por 6 reais a unidade, chocolate por 3 reais a unidade e refrigerante por 8,50 reais a unidade. Faça um programa que pergunte quantos tipos de guloseimas você vai querer (1, 2 ou 3) e que após isso pergunte qual a guloseima e a quantidade (unidades). Ao final deve ser mostrado o valor total. (Exemplo: Digitei que quero 2 guloseimas, o programa me pergunta qual guloseima, eu digito “pipoca” e em seguida ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta qual a segunda guloseima, eu digito refrigerante, quantidade 1. Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50.)*/

// Cria variáveis e inicializa com valores
let tipos, guloseima, quantidade
let pipoca = 6
let chocolate = 3
let refrigerante = 8.5
let soma = 0


    // Recebe a quantidade de tipos e armazena 	
    tipos = Number(prompt("Quantos tipos de guloseimas você quer?"))

        // Cria loop para a quantidade desejada
	for(let i=0; i < tipos; i++){

	// Recebe o nome da guloseima e a quantidade, armazenando esses dados
        guloseima = prompt(`Qual a guloseima número ${i+1}?`)
        quantidade = Number(prompt(`Quantos(as) ${guloseima}s você quer?`))

	     // Verifica se a guloseima é pipoca
             if (guloseima == 'pipoca'){

		// Faz o total mutiplicando tipo pela quantidade
                soma = soma + (pipoca * quantidade)

             }

             // Verifica se a guloseima é chocolate
             if (guloseima == 'chocolate'){

		// Faz o total mutiplicando tipo pela quantidade
                soma = soma + (chocolate * quantidade)

             }

	     // Verifica se a guloseima é refrigerante
             if (guloseima == 'refrigerante'){

		// Faz o total mutiplicando tipo pela quantidade
                soma = soma + (refrigerante * quantidade)

             }

	}

// Mostra mensagem com o total
alert(`O valor total a pagar é de R$${soma},00.`)