const boton = document.getElementById("ingresar");
boton.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("username").value == "" ||
    document.getElementById("password").value == "";

  if (username == "" || password == "") alert("Usuario o contraseña vacío");
  alert("Usuario o contraseña vacio");
  if (username == "Omar123" && password == "1234") {
    alert("Bienvenido");
    setTimeout(()=>{
      location="./home.html"
    },1000)
  } else {
    document.querySelector("#mensaje").style.display = "block";
    setTimeout(() => {
      document.querySelector("#mensaje");
      style.display = "none";
    }, 3000);
  }
  document.getElementById("password").addEventListener("mouseenter", mostrar);

  function mostrar() {
    document.getElementById("password").type = "text";
  }
  document.getElementById("password").addEventListener("mouseleave", ocultar);

  function ocultar() {
    document.getElementById("password").type = "password";
  }
  document
    .getElementById("rememberme")
    .addEventListener("change", function (z) {
      if (z.target.checked == true) {
        alert("Desea que recordemos sus datos");
      }
    });
});
