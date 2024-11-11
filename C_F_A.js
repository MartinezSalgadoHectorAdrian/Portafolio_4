//ciclos
/* Los ciclos como en otros lenjuages de programacion se utilizan para repetir una serie de instrucciones un numero determinado de veces o hasta que se cumpla una condicion*/

//foe y while
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//Funciones
let multiplicacion = (a, b) => a * b;
console.log(multiplicacion(5, 3)); // 15

let objeto = {
    nombre: "Jaime",
    saludar: function () {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    }
};
objeto.saludar();

//Arreglos
let arreglo = new Array(1, 2, 3, 4, 5);
let colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // rojo

let frutas = ["🍎"
    ,
    "🍐"
    ,
    "🍇"
    ,
    "🍓"];
    
    
    frutas.push("🥭");
    frutas.unshift("🍌");
     frutas.pop();
     console.log(frutas); // 🍌, 🍎, 🍐, 🍇
    
     let frutas2 = frutas.slice(1, 3);
     console.log(frutas2.join(" - ")); // 🍎 - 🍐
     console.log(frutas.length); // 5
    console.log(frutas.indexOf("🍇")); // 3
    
     let frutas3 = frutas.map((fruta) => fruta +
    "🍉");
     console.table(frutas3);