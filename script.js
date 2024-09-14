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

function mode(el){
  el.target.classList.toggle("dark");
  title.classList.toggle("dark");
  paragraph.classList.toggle("dark");

}
button.addEventListener("click", mode);





// Primer codigo

// const listaDeToppings = document.getElementById("lista-toppings");
// const newTopping = document.createElement("li");
// newTopping.classList.add("topping", "fondo-marron");
// newTopping.setAttribute('onclick','showTopping("Extra Queso")');
// newTopping.innerHTML = "Queso Extra";
// listaDeToppings.append(newTopping);


// function showTopping(topping){
//     console.log(topping)
//     const p = document.querySelector('p');
//     p.innerHTML = "Escojiste: "+topping;
// }

// function mode(){
//     const aply = document.getElementById("lista-toppings");
//     const letraBody = document.getElementById("title");
//     const selec = document.getElementById("selection");
//     const bot = document.getElementById("boton");
//     letraBody.classList.toggle("dark");
//     aply.classList.toggle("dark");
//     selec.classList.toggle("dark");
//     bot.classList.toggle("dark");
// }
