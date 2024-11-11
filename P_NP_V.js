// Datos Primitivos
let cadena = "Hola mundo";
let numero = 1315;
let logico = true;
let nulo = null;
let indefinido;
let simbolo = Symbol("foo");

// Symbol
let objetoConSimbolo = {
    [simbolo]: "bar",
};

// Datos no primitivos
let objeto = { nombre: "Jaime", edad: 37 };
let arreglo = [1, 2, 3, 4, 5];

function suma(a, b) {
    return a + b;
}

let fecha = new Date();
let patron = /ab+c/;
let error = new Error("Error de prueba");

// Imprimir cada dato en pantalla
console.log("Cadena:", cadena);
console.log("Número:", numero);
console.log("Lógico:", logico);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);
console.log("Símbolo:", simbolo.toString());
console.log("Objeto con símbolo:", objetoConSimbolo[simbolo]);
console.log("Objeto:", objeto);
console.log("Arreglo:", arreglo);
console.log("Suma de 3 y 4:", suma(3, 4));
console.log("Fecha actual:", fecha);
console.log("Patrón (expresión regular):", patron);
console.log("Error:", error.message);
