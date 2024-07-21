document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      // Evita que el formulario realice el envío real
      event.preventDefault();
      
      // Recarga la página
      location.reload();
    });
  });
  