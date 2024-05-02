/* Estilos específicos para carrousel-index.html */
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;
  let interval = null;

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    carousel.style.transition = "transform 0.5s ase-in-out";
    carousel.style.transform = `translateX(-${currentIndex * (100 / totalItems)}%)`;
  }

  interval = setInterval(moveToNextSlide, 3000); // Cambia 3000 por el tiempo en milisegundos que desees

  // Event listener para detectar el final de la transición
  carousel.addEventListener("transitionend", function() {
    // Si el carrusel ha llegado al final, vuelve suavemente a la primera imagen
    if (currentIndex === totalItems - 1) {
      carousel.style.transition = "none"; // Desactiva temporalmente la transición
      currentIndex = 0;
      carousel.style.transform = `translateX(-${currentIndex * (100 / totalItems)}%)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ase-in-out"; // Vuelve a activar la transición después de un breve tiempo
      }, 50);
    }
  });
});

/* Estilos específicos para interacción-tarjetas-artistas.html */
function cambiarImagen(idMostrar, idOcultar) {
  var imagenMostrar = document.getElementById(idMostrar);
  var imagenOcultar = document.getElementById(idOcultar);
  imagenMostrar.style.display = "block";
  imagenOcultar.style.display = "none";
}

