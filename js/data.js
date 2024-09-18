document.addEventListener('DOMContentLoaded', function() {
    let datoIngresado = localStorage.getItem('datoIngresado');
    document.getElementById('data').textContent = datoIngresado;
});