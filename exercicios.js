//Exercícios
// Exercício 1 Declare uma função 'imprimirPessoa' e crie um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem: "A cor favorita de pessoa é cor." Faça o programa duas vezes! Na primeira, use concatenação, e na segunda, Template Strings.

/*function imprimirPessoa1(){
    let nome1=prompt("insira seu nome:")
    let corFavorita1=prompt("Insira sua cor favorita")
    console.log("A cor favorita de "+nome1+" é "+corFavorita1+".")
    
}
imprimirPessoa1()

function imprimirPessoa2(){
    let nome2=prompt("insira seu nome:")
    let corFavorita2=prompt("Insira sua cor favorita")
    console.log(`A cor favorita de ${nome2} é ${corFavorita2}.`)
    
}
imprimirPessoa2()*/





//Exercício 2 Altere a forma com que o texto aparece. Altere a primeira versão do programa para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas, após a frase inicial. Altere a segunda versão do programa para que a string seja impressa dessa forma (utilizando apenas um console.log): Nome: fulano Cor Favorita: cor citacao: "bla bla bla"

//Exercício 3 - Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas - Exiba no console quantos caracteres tem o nome da pessoa - Verifique se o nome da pessoa possui a letra A

function imprimirPessoa3(){
    let nome=prompt("Diga o seu nome:")
    let tamanhoNome=nome.length
    let nomeTemA=nome.includes("a")
    console.log(`Seu nome é ${nome}`);
    console.log(`Seu nome tem ${tamanhoNome} letras`);
    console.log(`Seu nome tem a letra "a":`, nomeTemA)
}
imprimirPessoa3()
