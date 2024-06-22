
function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
    mensaje.classList.add("oculto"); // Agrega la clase para mostrar el mensaje
    reproducirAudio(); // Llama a la función para reproducir el audio
}
function reproducirAudio() {
    var audio = document.getElementById("audio");
    audio.play(); // Reproduce el audio
}

function mostrarTexto() {
    $(document).ready(function(){
        $("body").hide().fadeIn(5000);
  });
    var texto = document.getElementById("texto_oculto");
    texto.classList.remove("oculto"); // Quita la clase para mostrar el texto
}