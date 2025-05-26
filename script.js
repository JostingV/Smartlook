
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado!");
});

function botonClicado(nombre) {
  alert(`Clic en el botón ${nombre}`);
}
