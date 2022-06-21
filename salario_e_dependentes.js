
alert('>>> DEPENDENTES FUNCIONÁRIOS <<<')

//Criar as variáveis
let nomeFuncionario, salarioFuncionario, DepFuncionario, novoSalario

//Armazena as variáveis
nomeFuncionario = prompt('Qual o nome do funcionário? ')
salarioFuncionario = Number(prompt('Qual o salário do funcionário? R$'))
DepFuncionario = Number(prompt('Qual a quantidade de dependentes do funcionário? '))
novoSalario = 0

// Faz o cálculo e mostre na tela
switch(DepFuncionario){
    case 0:
        novoSalario = salarioFuncionario + (salarioFuncionario * 5 / 100)
            break
    
    case 1, 2, 3:
        novoSalario = salarioFuncionario+ (salarioFuncionario * 10 / 100)
            break

    case 4, 5, 6:
        novoSalario = salarioFuncionario + (salarioFuncionario * 15 / 100)
            break

    default:
        novoSalario = salarioFuncionario+ (salarioFuncionario * 18 / 100)
}

alert(`O novo salário de ${nomeFuncionario} será de ${novoSalario} R$.`)

// Fim da execução.