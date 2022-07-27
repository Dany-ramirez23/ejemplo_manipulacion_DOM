const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const escribirResultado = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener("submit", btnOnClick);

function btnOnClick(event) {
  event.preventDefault(); //hace que no se recarge automáticamente la página
  let resultado = parseInt(input1.value) + parseInt(input2.value);
  console.log(resultado + "Wow me clickearon uwu");
  escribirResultado.innerText =
    "El resultado de " +
    input1.value +
    " + " +
    input2.value +
    " es: " +
    resultado;
}
