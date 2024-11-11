 let parrafo = document.querySelector("p");
 let padre_parrafo = parrafo.parentElement;
 console.log(padre_parrafo); // body

 let lista = document.createElement("ol");
 for (let i = 1; i <= 5; i++) {
 let item = document.createElement("li");
 item.innerText = `Elemento ${i}`;
 lista.appendChild(item);
 }

 padre_parrafo.appendChild(lista);