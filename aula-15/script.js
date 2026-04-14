/*
console.log("aulazinha de pitch")

//laços de repetEção

//for = para
// i = variavel de controle
// i < 5 = duração do laço
// i++ = aumenta em 1 em 1

for(var i = 0; i < 10; i++){
    console.log("amigo estou aqui")
}

console.log("acabou :(")
// while = enquanto
var c = 1

//(coloca a condição de entrar no loop)
while(c < 10){
    console.log("amigo estou aqui")
    //se não tiver algo para tirar no loop
    //ele fuca aqui para sempre
    c++
}

console.log("acabou :( denovinho")

//array
var array = ["Neymar",10,true,5.0]

//mostra o array completo
console.log(array)

//mostra o item do array
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

array[2] = "Messi"

//mostrar todo o array
console.log(array)
*/

// comentei tudo daqui pra cima

var times = ["Palmeiras", "Corinthians", "São Paulo", "Santos"]

for(var i= 0; i <2; i++){
    console.log("O time atual é: ", times[i])
}

//lenght - descobre o tamanho do array
console.log(times.length);

console.log("------------------------------")
//faz a repetição até o fim do array
//independente do tamanho, com o .lenght
for(var i= 0; i < times.length; i++){
    console.log("O time atual é: ", times[i])
}

console.log("------------------------------")
// for especifico de array
for(var index in times){
    console.log("O indice atual é: ", index)
    console.log("O valor do indice é: ", times[index])
}

//of - já sabe o valor do elemento 
for (var index of times){
    console.log(index)
}



























