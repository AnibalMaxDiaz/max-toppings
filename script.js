const listaDeToppings = document.getElementById("lista-toppings");
const newTopping = document.createElement("li");
newTopping.classList.add("topping", "fondo-marron");
newTopping.setAttribute('onclick','showTopping("Extra Queso")');
newTopping.innerHTML = "Queso Extra";
listaDeToppings.append(newTopping);


function showTopping(topping){
    console.log(topping)
    const p = document.querySelector('p');
    p.innerHTML = "Escojiste: "+topping;
}

function mode(){
    const aply = document.getElementById("lista-toppings");
    const letraBody = document.getElementById("title");
    const selec = document.getElementById("selection");
    const bot = document.getElementById("boton");
    letraBody.classList.toggle("dark");
    aply.classList.toggle("dark");
    selec.classList.toggle("dark");
    bot.classList.toggle("dark");
}
