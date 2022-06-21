
/* Criar um sistema que simule um caixa eletrônico, com uma tela de menu (alert ou prompt) que deve pedir ao usuário para inserir uma opção das opções abaixo:

1 - Saldo
2 - Pix
3 - Depósito
4 - Sair

 Critérios de validação

- Todo usuário inicia a conta com R$1.000 reais. 
- Ao selecionar o saldo, apresentar o valor do saldo do usuário. 
- Ao selecionar pix, deverá descontar o valor inserido pelo usuário da conta, mas só aparecerá uma mensagem de sucesso caso o usuário tenha um saldo, maior ou igual ao valor inserido, senão apresentar uma mensagem de falha.
- Ao escolher depósito, deverá inserir o valor que será adicionado à conta, somando ao saldo já existente. 
- Em todos os casos, não importando a opção, deverá retornar para o menu para o usuário selecionar outra opção, fora a opção de sair, essa realmente encerra o sistema. */ 

// Criar e armazenar as variáveis
let saldo, deposito, pix, sair

saldo = 1000
deposito = 0

let menu

// Chamar a função

chamaMenu()

function chamaMenu(){

    menu = Number(prompt(">>> CAIXA ELETRÔNICO <<<\n\n Qual operação deseja realizar?\n\n1- Saldo\n2- Pix\n3- Depósito\n4- Sair"))

// Estabeleça a condição e faça o cálculo mostrando na tela

    switch(menu){
        case 1:
            alert(`O saldo disponível é $R${saldo}`)
                chamaMenu()
                    break

        case 2:
            pix = Number(prompt("Digite o valor que deseja transferir: "))

            if(pix <= saldo){
               saldo = saldo - pix
                alert(`Transferência de $R${pix} realizada com sucesso.`)

            }else{
                alert("Seu valor é insuficiente para realizar essa operação.")
            }   
                    chamaMenu() 
                        break    
        
        case 3:
            
            deposito = Number(prompt("Digite o valor que deseja depositar na conta: "))
            saldo = saldo + deposito
        
                alert(`Depósito de $R${deposito} realizado com sucesso.`)
                    chamaMenu()
                        break

        case 4:
          sair = sair
                break

        
        default:
            alert(">>> AVISO <<<\n\nVocê deve selecionar uma operação.")
                chamaMenu()
    }

}

// Fim da condição







