//let saludo= "hola desde if en la pagina conditionals"
//document.write(saludo)
//console.log(saludo)

//let age= prompt("Ingrese su edad");
//console.log('edad ingresada por el usuario: ', age);
//if(age >= 18) { document.write('puede ingresar al boliche <br>');
 //   if(age >50){ document.write('tiene un descuento por mayor');
//}
//} else if (age<18){
 //   document.write("no puede ingresar");
//}


// let años = window.prompt ("Ingrese edad");
// console.log ("edad ingresada por el usuario ", años);
// const pochoclos= 200;
// const gaseosa= 100;
// const valorEntrada= 400;
// let valorTotal= 0;
// let socio = false;

// if (años >= 55){
//     document.write ("valor de la entrada $ " + valorEntrada *0.75 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal = valorEntrada *0.75;
// } else if (años <= 12){
//     document.write ("valor de la entrada $ " + valorEntrada *0.5 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorTotal *0.5;
// } else if (años < 18){
//     document.write ("valor de la entrada $ " + valorEntrada *0.8 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorEntrada * 0.8 ;
// } else {
//     document.write ("valor de la entrada $ " + valorEntrada  + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal=  valorEntrada;
// }
// valorTotal = valorTotal + pochoclos + gaseosa;
// document.write("<br> El valor total a abonar por sus productos es de: $  " + valorTotal);
// if (socio === true){
//     valor total= valorTotal *0.5
// }

// if (años >= 55){
//     document.write ("valor de la entrada $ " + valorEntrada *0.75 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal = valorEntrada *0.75;
// } else if (años <= 12){
//     document.write ("valor de la entrada $ " + valorEntrada *0.5 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorTotal *0.5;
// } else if (años < 18){
//     document.write ("valor de la entrada $ " + valorEntrada *0.8 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorEntrada * 0.8 ;
// } else {
//     document.write ("valor de la entrada $ " + valorEntrada  + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal=  valorEntrada;
// }
// valorTotal = valorTotal + pochoclos + gaseosa;
// document.write("<br> El valor total a abonar por sus productos es de: $  " + valorTotal);

// if (años >= 55){
//     document.write ("valor de la entrada $ " + valorEntrada *0.75 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal = valorEntrada *0.75;
// } else if (años <= 12){
//     document.write ("valor de la entrada $ " + valorEntrada *0.5 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorTotal *0.5;
// } else if (años < 18){
//     document.write ("valor de la entrada $ " + valorEntrada *0.8 + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal= valorEntrada * 0.8 ;
// } else {
//     document.write ("valor de la entrada $ " + valorEntrada  + " + caja de pochoclos $ " + pochoclos + "+ una gaseosa $ " + gaseosa);
//     valorTotal=  valorEntrada;
// }
// valorTotal = valorTotal + pochoclos + gaseosa;
// document.write("<br> El valor total a abonar por sus productos es de: $  " + valorTotal);


let signo = prompt("Ingrese su signo");
console.log (signo);
signo = signo.toLowerCase();
console.log (signo);
// el toLowerCase es un afuncion que se usa para pasar todo el texto que se ingresa a minusculas y asi me coincida con mi condicion y como esta escrito mi texto

if (signo =="aries" || signo== "leo" || signo == "sagitario"); {
    document.write ("su signo es del tipo Fuego");
}
else if (signo =="tauro" || signo== "virgo" || signo == "capricornio"); {
    document.write ("su signo es del tipo Tierra");
} else if (signo =="geminis" || signo== "libra" || signo == "acuario"); {
    document.write ("su signo es del tipo Aire");
} else if  (signo =="cancer" || signo== "escorpio" || signo == "piscis"); {
        document.write ("su signo es del tipo Agua");
}


