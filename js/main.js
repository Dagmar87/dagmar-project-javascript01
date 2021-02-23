// Aula 05: Parte 2: Manipulando elementos da página

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// Aula 04: Desenvolva páginas web com JavaScript 

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

*/

// Aula 03: Condicionais, laços de repetição e Date

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());

var count;
for(count = 1; count <= 5; count++){
    alert(count);
}

var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
};

var idade = prompt("Qual sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

// Aula 02: Array e Dicionário

/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var lista = ["maçã", "pera", "laranja"];
console.log(lista);
console.log(lista[1]);
alert(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

// Aula 01: Introdução ao JavaScript

/*
ar nome = "José Dagmar FSS";
var idade = 33;
var idade2 = 10;
var frase = "O Japão é o melhor time do mundo";

var n1 = 5;
var n2 = 3;

alert(nome + " tem " + idade + " anos");

alert(idade + idade2);

alert("Bem vindo " + nome);

alert("Meu Primeiro JS");

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log(n1 * n2);
*/