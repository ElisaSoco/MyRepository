let fruits = ["naranja", "manzana", "banana", "kiwi", "frutilla", "uva", "durazno"];
// console.log(fruits);
let fruitOne= fruits[0];



let fruitsHTMLelement = document.querySelector('#innerData');
fruitsHTMLelement.innerHTML= fruits;
fruitsHTMLelement += `<p>La longitud del array es: ${fruits.length}</p>`
console.info('longitud de la', fruitOne, fruitOne.length)


let vocales = ["a","e","i","o","u"];
let miTexto= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, odit!";
let contadorDeVocales= 0;
for(let i=0 ; i<miTexto.length ; i++){
    miTexto[i];
}
