// Mini-proyecto Programa Promedio de 3 Notas

// Definir las notas

let nota1 = 4.2;
let nota2 = 1.0;
let nota3 = 3.5;

// Validar que todas las notas esten 0 y 5
if(
    nota1 >= 0 && nota1 <= 5 &&
    nota2 >= 0 && nota2 <= 5 &&
    nota3 >= 0 && nota3 <= 5
){
    // Si todas son validad se calcula el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;
    let promedioFormateado = promedio.toFixed(1);
    console.log(`El promedio es: ${promedioFormateado}`);
    let promedioRedondeado = Math.round(promedio);
    console.log(`El promedio redondeado es: ${promedioRedondeado}`);

    if(promedio >= 3.0){
        console.log(`Aprobaste con el promedio: ${promedioFormateado}`);
    }else{
        console.log(`Con el promedio ${promedioFormateado} repruebas`);
    }
}
else{
    // Si alguna nota no es valida
    console.log("Todas las notas deben estar entre el rango 0 y 5. Revisa los valores.");
}