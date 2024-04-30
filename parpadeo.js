document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento h2 con la clase "title__presentation"
    var title = document.querySelector("h2.title__presentation");

    // Verifica si se encontró el elemento antes de continuar
    if (title) {
        var text = "< ¡Hola, Mundo! Soy Johnnys, Desarrollador Web>";
        var index = 0;

        // Función para escribir el texto de manera gradual
        function writeText() {
            title.innerHTML = text.substring(0, index);
            // Cambia el color del texto a naranja a medida que se escribe
            title.innerHTML += "<span style='color: orange;'>" + text.charAt(index) + "</span>";
            if (index < text.length) {
                // Llama a la función nuevamente después de un pequeño retraso
                setTimeout(writeText, 100); // Ajusta el tiempo según lo deseado
                index++;
            } else {
                // Una vez que se ha escrito todo el texto, agrega el cursor parpadeante
                var cursorSpan = document.createElement("span");
                cursorSpan.className = "blinking-cursor";
                cursorSpan.textContent = "|";
                title.appendChild(cursorSpan);
            }
        }

        // Comienza escribiendo el texto
        writeText();
    }
});
