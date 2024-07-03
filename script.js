// Obtener referencias a los elementos del DOM
const toggleButton = document.getElementById('toggleButton');
const socialMenu = document.getElementById('socialMenu');

// Escuchar clic en el botón toggle
toggleButton.addEventListener('click', function() {
    // Alternar la visibilidad del menú social con transición
    if (socialMenu.style.display === 'block') {
        socialMenu.style.display = 'none';
    } else {
        socialMenu.style.display = 'block';
    }
});

// Cerrar el menú social al hacer clic fuera de él
document.addEventListener('click', function(event) {
    if (!socialMenu.contains(event.target) && event.target !== toggleButton) {
        socialMenu.style.display = 'none';
    }
});
