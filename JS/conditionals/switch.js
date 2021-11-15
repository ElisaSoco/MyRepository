let listHTMLelement= document.querySelector("#fruit-list");
console.log(listHTMLelement);
// listHTMLelement.innerHTML= "<li class='text-light'>Hola este es un parrafo</li>"
// listHTMLelement.innerHTML+= "<h2>Añadido mas contenido</h2>"-----> se usa para matener lo anterior e incorporar cosas nuevas
let totalamountHTMLelement = document.querySelector("#total-amount");




let total = 0;
let fruta = null;
do {
    fruta = prompt("Ingrese la fruta que desea comprar");
    console.log(fruta)
    if(typeof fruta === 'string') fruta.toLowerCase();
    else break;
    let kg = 0;
    let subtotal = 0;
    do {
        kg = parseInt(prompt("Ingrese la cantidad que desea comprar"));
    } while (isNaN(kg))
    let precioKg = 0;
    switch (fruta) {
        case 'naranja':
            precioKg = 150;
            listHTMLelement.innerHTML += `<li class ="list-group-item">${fruta} - cantidad: ${kg} - precio unitario ${precioKg} <strong> SUBTOTAL: $ ${precioKg*kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg} <br>`);
            subtotal = precioKg * kg;
            break;
        case 'frutilla':
            precioKg = 1100;
            listHTMLelement.innerHTML += `<li class ="list-group-item">${fruta} - cantidad: ${kg} - precio unitario ${precioKg} <strong> SUBTOTAL: $ ${precioKg*kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg} <br>`);
            subtotal = precioKg * kg;
            break;
        case 'kiwi':
            precioKg = 200;
            listHTMLelement.innerHTML += `<li class ="list-group-item">${fruta} - cantidad: ${kg} - precio unitario ${precioKg} <strong> SUBTOTAL: $ ${precioKg*kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg} <br>`);
            subtotal = precioKg * kg;
            break;
        case 'palta':
            precioKg = 700;
            listHTMLelement.innerHTML += `<li class ="list-group-item">${fruta} - cantidad: ${kg} - precio unitario ${precioKg} <strong> SUBTOTAL: $ ${precioKg*kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg} <br>`);
            subtotal = precioKg * kg;
            break;
        case 'uva':
            precioKg = 100;
            listHTMLelement.innerHTML += `<li class ="list-group-item">${fruta} - cantidad: ${kg} - precio unitario ${precioKg} <strong> SUBTOTAL: $ ${precioKg*kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg} <br>`);
            subtotal = precioKg * kg;
            break;
        default:
            console.warn("la fruta ingresada no es correcta");
    }
    total += subtotal;
} while (fruta !== null)

totalamountHTMLelement.innerHTML = `$ ${total}`;

