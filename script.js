// Nuevo codigo
// Generales

const button = document.getElementById("boton");
const toppings = document.getElementsByClassName("topping");
const paragraph = document.getElementById("p");
const title = document.getElementById("title");

// Verificacion de Topping


function verifiTopping(e){
  paragraph.innerHTML = "Seleccionaste: " + e.target.innerText;
}

for (const topping of toppings){
  topping.addEventListener("click", verifiTopping);
}

// Modo Oscuro

function mode(){
  for (const topping of toppings){    
    topping.classList.toggle("dark");                                   //
  }     
  button.classList.toggle("dark");
  title.classList.toggle("dark");
  paragraph.classList.toggle("dark");
}

button.addEventListener("click", mode);




