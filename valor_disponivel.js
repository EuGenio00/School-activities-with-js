/* Criar um programa que verifica a quantia de valor disponível, caso for maior ou igual a 1000 liberar para ir ao cinema, caso for menor que 1000 e maior ou igual a 500 pode comprar amendoim, se não mostrar na tela (ficar em casa). */

// Criar as variáveis
let dinheiro

// Armazenar as variáveis

dinheiro = Number(prompt('Coloque a quantia disponível: '))

// Faz o cálculo e mostre o resultado na tela

    if(dinheiro >= 1000){

        alert('Cinemou :).\nVocê está liberado!')

        }if(dinheiro >= 500 && dinheiro < 1000){

            alert('Comprar amendoim')
            
  }else{
            alert('Ficar em casa :(')
  }

// Fim da execução. 