/* Criar um sistema que receba os dados do usuário (janela) para sinalizar se ele pode se cadastrar no sistema do governo brasileiro. Os seguintes critérios devem ser adotados: 

(DESENVOLVER UTILIZANDO IF/ELSE)

    O usuário deve ser brasileiro, do sexo masculino e ter entre 18 e 65 anos.
    O usuário deve ser brasileiro, do sexo feminino e ter entre 18 e 60 anos.
    O usuário, caso não seja brasileiro, deve morar no Brasil a mais de 3 anos e ter entre 21 e 30 anos.*/



    let nacionalidade = ''
    let sexo = ''
    let idade = 0
    tempoBR = 0
    
    nacionalidade = prompt('Sua nacionalidade: ')
    sexo = prompt('Seu sexo (F/M): ')
    idade = prompt('Sua idade: ')
    
    
    if(nacionalidade == 'brasileiro' && sexo == 'M' && idade >= 18 && idade <= 65){
        alert('Login efetuado!')
    
    }if(nacionalidade == 'brasileiro' && sexo == 'F' && idade >= 18 && idade <= 60){
        alert('Login efetuado!')
    
    }if(nacionalidade != 'brasileiro' && tempoBR >=3 && idade >= 21 && idade <= 30){
    }
            tempoBR = Number(prompt('Quanto tempo morando no BR? '))
    
        if(tempoBR >= 3){
    
            alert('Login efetuado!')
    
        }         
    