document.getElementById('buttonText').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;

    localStorage.setItem('datoIngresado', inputText);

    document.getElementById('inputText').value = '';
});
