/*Como ya se revisó previamente, la declaración de variables, combina la palabra reservada let
con el nombre de la variable y opcionalmente con un valor inicial.
Sino se establece un valor inicial, la variable se inicializa con undefined .*/

let variable = tipoDato;

//La palabra reservada let crea una variable local con ámbito de bloque, opcionalmente se puede
//utilizar var para crear una variable con ámbito de función* o const para crear una constante.

var variables = tipoDato;
 const constante = tipoDato;

 //Cuando Usar var y let
 
/* La principal diferencia entre var y let es el ámbito de la variable; mientras que var tiene un
ámbito de función, let tiene un ámbito de bloque, es decir, que la variable declarada con let solo
existe dentro del bloque en el que fue declarada.*/

if (true){
    let x=5;

}
console.log(x);

if (true){
    var y =5;

}
console.log(y);