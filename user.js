const form = document.getElementById("my-form");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.querySelector(".msg");

function onSubmit(e) {
  e.preventDefault();
  if (firstName.value === "" || email.value === "") {
    msg.innerHTML = "Rellana tu nombre o tu correo";
  }else if (/(\w+?@\w+?\x2E.+)/.test(email.value) == false) {
    msg.innerHTML = "Please enter a correct email";
  }
 
  else {
    msg.innerHTML = "¿Sabes leer?";
  }

  //limpiar formulario
  firstName.value= ""
  email.value =""

 // borrar el mensaje cuando pase 3 segundos 
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

form.addEventListener("submit", onSubmit);

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(` Mi nombre es ${firstName.value} y mi correo es ${email.value}`);
// });


// expresiones regulares

let re;

re = /hello/;
re = /^hello/i;

// re = /^h/i; 

re = /World$/i 

re = /^hello$/i 

re = /^(?=.*\d).{4,8}$/

const result = re.test("asdf")

console.log(result)
