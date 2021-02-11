
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com/");
    window.location.href = "https://www.youtube.com/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "<b>Obrigado por passar o mousee!</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mousee!</b>";
   //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mousee!</b>";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){    
    var validar;
    if (idade >= 18){s
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade!");
console.log(validaIdade(idade));
/*

//alert(soma(2, 3));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var lista = ["maça", "pêra", "laranja"]
lista.push("push");
console.log(lista);
lista.pop();
console.log(lista);
alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.join(" | "));


var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"banana", cor:"amarela"}];
console.log(frutas);
console.log(frutas[0].nome);
alert(frutas[1].cor);


//var idade = 18;
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}


var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}

var count;
for (count=0; count <=5; count++){
    alert(count);
}


var d = new Date();
alert(d);
alert(d.getMonth()+1);

alert(d.getTime());

var dia = d.getDay();
var mes = d.getMonth()+1;
var ano = d.getFullYear();
alert(dia+"/"+mes+"/"+ano);

alert(d.getMinutes());
alert(d.getHours());
alert(d.getMinutes());

/*

/*
var nome = "João Paulo Patuci Alves"
var idade = 35;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome + " você tem " + idade + " anos");

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/