console.log("funciona")

document.getElementById("sumar").addEventListener("click", function(){

let NumeroA = getElementById("Num1").value;
console.log ("el valor del NumeroA es " + NumeroA);

let NumeroB = getElementById("Num2").value;
console.log ("el valor del NumeroB es " + NumeroB);

let resultado = sumar(parseInt(NumeroA) + parseInt(NumeroB));
console.log ("el resultado de la operacion es " + resultado);

document.getElementById("resultado").innerHTML = resultado;

document.getElementById("respuesta").style.display = "block";


    
});

function sumar (a,b){
    return a+b}