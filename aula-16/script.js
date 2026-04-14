// com arrays
var barquinho = ["Pedro","Tiago","João"]
var profissoes = ["Pescador","Navegador","Capitão"]

console.log(barquinho[0], "é", profissoes[0]) // Pedro é Pescador

// com objetos
// { chave: valor }
var cantores = {
    // chave : "valor"
    nome: "Charlie Brown Jr",
    generoMusical: "Rock",
    estaVivo: false,
    idade: 49
}
// Printa o objeto inteiro
console.log(cantores);

// Printa uma chave do objeto
console.log(cantores.nome); 
console.log(cantores.generoMusical); 
console.log(cantores.estaVivo); 
console.log(cantores.idade);

// typeof(cantor)

var HoraDoLanchinho = {
    horainicio: "15:00",
    horafim: "15:30",
    local: "Pátio",
    duracao: "30 minutos"
}

console.log("O intervalo inicia às: ", HoraDoLanchinho["horainicio"])

// Alterando um objeto

var pessoa = { }
console.log(pessoa);

pessoa.nome = "Maria"
pessoa.peso = "60kg"
pessoa.tamanho = "170cm"
pessoa["idade"] = "25"

console.log(pessoa);

// Alterando valores de propriedades já existentes
pessoa.nome = "Joana"
pessoa["idade"] = "30"

console.log(pessoa);

// Objetos
var animal = {
    // propriedades
    nome: "gato",
    especie: "Felina",
    raca: "Siames",

    // métodos
    miar: function(){
        console.log("Miau!");
    },
    andar: function() {
        console.log("...");
    },
    dormir: function() {
        console.log("ZZZ");
    }
}

// Mostrando um valor através da propriedade
console.log(animal.nome)

// Mostra o texto da função

console.log(animal.miar)

animal.miar()