// Mini-proyecto numero par o impar

// Asignar valor a evaluar
let numero = 7; 

// Evaluar si el número es par o impar
if (isNaN(numero)){
    console.log("Por favor ingresa un valor numérico válido");
}else if (numero % 2 === 0){
    console.log(`El numero ${numero} es par`);
}
else {
    console.log(`El numero ${numero} es impar`);
}
