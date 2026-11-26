document.addEventListener("DOMContentLoaded", () => {

    const peliculas = document.querySelectorAll(".pelicula");

    peliculas.forEach(pelicula => {
        const img = pelicula.querySelector("img");
        const contenido = pelicula.querySelector(".contenido");

        // ocultar al inicio
        contenido.style.display = "none";

        img.addEventListener("click", () => {
            if (contenido.style.display === "none") {
                contenido.style.display = "block";
            } else {
                contenido.style.display = "none";
            }
        });
    });

});