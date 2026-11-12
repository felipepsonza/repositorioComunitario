const input = document.getElementById('cor');
const button = document.getElementById('button');
button.addEventListener('click', function () {
    const corFavorita = input.value;
    alert("A sua cor favorita é " + corFavorita);
});