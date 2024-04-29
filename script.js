/*qconsole.log("Aula de Strings")


console.log("pelé".toUpperCase());
console.log("PELÉ".toLowerCase());
console.log("Gosto de comer geléia".includes("comer"));// "includes" busca palavras na frase. É case sensitive
console.log("Gosto de comer geléia".includes("comer", "banana"));
console.log("Gosto de comer geléia".includes("comer" && "banana")); //"includes" admite operadores lógicos
const name="Tifany"
console.log(`A ${name} é legal`)

const texto="bilolinha de jesus"
let tamanho=texto.length
console.log(tamanho)

console.log(texto.toUpperCase());


let frase = "Eu gosto de maçãs.";

let novaFrase = frase.replace("maçãs", "laranjas");

console.log(novaFrase);

let novoTexto = texto.replace("bilolinha","jornal")
console.log(novoTexto);*/

//Exercícios
// Exercício 1 Declare uma função 'imprimirPessoa' e crie um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem: "A cor favorita de pessoa é cor." Faça o programa duas vezes! Na primeira, use concatenação, e na segunda, Template Strings.

function imprimirPessoa1(){
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
imprimirPessoa2()