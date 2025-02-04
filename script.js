document.addEventListener('DOMContentLoaded', function() {
    // Función para crear un corazón flotante
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️'; // Emoji de corazón
      // Posición horizontal aleatoria (0% a 100% del ancho de la ventana)
      heart.style.left = Math.random() * 100 + 'vw';
      // Tamaño aleatorio entre 10px y 30px
      const size = Math.random() * 20 + 10;
      heart.style.fontSize = size + 'px';
      // Duración aleatoria de la animación (entre 3 y 7 segundos)
      const duration = Math.random() * 4 + 3;
      heart.style.animationDuration = duration + 's';
      document.body.appendChild(heart);
      // Eliminar el corazón al finalizar la animación
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  
    // Crear un corazón cada 500 milisegundos
    setInterval(createHeart, 500);
  });
  