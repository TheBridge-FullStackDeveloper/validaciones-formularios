// crea un formulario que te pida tu nombre y edad
// trae los campos al archivo js
// cuando le de click al botón de enviar muestra por consola el valor de dichos campos
// guarda dichos valores en un objeto en el localStorage
// ahora muestra lo que hay en el local Storage en el DOM

const firstName = document.getElementById("name");
// const firstName = document.querySelector("#name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");
const showUserDiv = document.querySelector(".showUser");

function onSubmit(e) {
  e.preventDefault();
  const user = {
    name: firstName.value,
    age: age.value,
  };
  localStorage.setItem("UserStorage", JSON.stringify(user));

  paintUser();
}

function paintUser() {
  const userStorage = JSON.parse(localStorage.getItem("UserStorage"));
  showUserDiv.innerHTML = `<p>Name: ${userStorage.name} Edad: ${userStorage.age}</p>`;
}
paintUser();
btn.addEventListener("click", onSubmit);
