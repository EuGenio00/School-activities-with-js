// Criar as variáveis

let nota1, nota2, media
let aproveitamento

// Armazena as variáveis
nota1 = Number(prompt('Digite a primeira nota: '))
nota2 = Number(prompt('Digite a segunda nota: '))

// Faz o cálculo
media = ((nota1 + nota2) / 2).toFixed(2)

aproveitamento = ''

// Estabeleça a condição

    if(media >= 9 && media <= 10){
        aproveitamento = 'A'

        }else if(media <= 9 && media >= 8){
        aproveitamento = 'B'

        }else if(media <= 8 && media >= 7){
        aproveitamento = 'C'  

        }else if(media <= 7 && media >= 6){
        aproveitamento = 'D'

    }else if(media <= 6 && media >= 5){
        aproveitamento = 'E'
             
    }else{
         aproveitamento = 'F'

    }

// Mostrar o resultado na tela
alert(`MEDIA: ${media}\nAPROVEITAMENTO: ${aproveitamento}`)

// Fim da execução.