document.addEventListener("DOMContentLoaded", function() {
    const name = "Ricardo Melendez Gutierrez";
    let i = 0;
    const speed = 100; // Velocidad de escritura en milisegundos

    function typeWriter() {
        if (i < name.length) {
            document.getElementById("name").innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
