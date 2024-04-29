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

/*function imprimirPessoa3(){
    let nome=prompt("Diga o seu nome:")
    let tamanhoNome=nome.length
    let nomeTemA=nome.includes("a")
    console.log(`Seu nome é ${nome}`);
    console.log(`Seu nome tem ${tamanhoNome} letras`);
    console.log(`Seu nome tem a letra "a":`, nomeTemA)
}
imprimirPessoa3()*/

//Desafio Crie uma função  que pergunte ao usuário seu nome e seu e-mail e senha. A senha deve ter 8 caracteres, e você deve garantir que todas as letras do email sejam minúsculas. Em seguida, imprima no console a mensagem no formato abaixo: "O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!" Sua  senha tem 8 caracteres? (true/false) Substitua todas as letras A da senha criada, pela letra X Verifique se o e-mail da pessoa possui @, e imprima a resposta da verificação no console.

function login() {
    let usuario=prompt("qual é o seu nominho?")
    let email=prompt("Qual é o seu e-mail?")
    let novoEmail=email.toLowerCase
    let senha=prompt("Qual é a sua senha? obs: deve ter 8 caracteres")

    console.log(`O e-mail ${novoEmail} foi cadastrado com sucesso. Boas vindas, ${usuario}!`);
    console.log(`Sua senha tem ${senha.length} caracteres, abestado`);
    let novaSenha=senha.replaceAll("a","x");
    console.log(`Sua nova senha é ${novaSenha}`)
    //let procuraArroba=novoEmail.includes("@")
    //console.log("Seu e-mail possui "@"? ",procuraArroba  )
}
login()