/*Los condicionales en JavaScript son similares a los de otros lenguajes de programación, se
utilizan para tomar decisiones en el flujo del programa.*/

let edad = 18;
 if (edad >= 18)
 {
    console.info("Eres mayor de edad");

 }
 else
 {
     console.warn("Eres menor de edad");
 }

 //Mas ejemplos
 //If anidados
 let anio = prompt("¿En qué año naciste?");
let anio_actual = new Date().getFullYear();
let Edad = anio_actual - anio;

if (edad >= 18) {
    console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18) {
    if (edad === 12) {
        console.log("Eres un preadolescente");
    } else {
        console.log("Eres un adolescente");
    }
} else {
    console.warn("Eres un niño");
}
//switch
let dia = prompt("Ingresa un número del 1 al 7");

switch (dia) {
    case "1":
        console.log("Lunes");
        break;
    case "2":
        console.log("Martes");
        break;
    case "3":
        console.log("Miércoles");
        break;
    default:
        console.error("Día no válido");
        break;
}
