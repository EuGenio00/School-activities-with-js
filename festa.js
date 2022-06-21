/* Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.*/

// Define as variáveis
let convidados, litroTotal, mediaLitro
let litroDisperdiçado, litroResto

    // Recebe os valores e armazena
    convidados = 45    
    litroTotal = 300
    litroDisperdiçado = Number(prompt("Digite a quantidade de litros disperdiçado: "))
    litroResto = Number(prompt("Digite a quantidade de litros que sobrou: "))

    // Realize o cálculo
    mediaLitro = ((litroTotal - litroDisperdiçado - litroResto) / convidados).toFixed(2)

// Exibe o resultado na tela
alert(`A média de litros bebidos por pessoa é de: ${mediaLitro}.`)