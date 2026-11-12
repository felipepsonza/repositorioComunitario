const input = document.getElementById('cor');
const button = document.getElementById('button');
const mensagem = document.getElementById('mensagem');
const historicoLista = document.getElementById('historico-lista');
const body = document.body;

button.addEventListener('click', function () {
    const corFavorita = input.value.trim();

    if (corFavorita === "") {
        mensagem.style.color = "#ff6b6b";
        mensagem.textContent = "Por favor, digite uma cor!";
        return;
    }

    body.style.backgroundColor = corFavorita;

    mensagem.style.color = "#51cf66";
    mensagem.textContent = `Sucesso! Cor aplicada: ${corFavorita}`;

    const li = document.createElement('li');
    li.className = 'cor-tag';
    li.textContent = corFavorita;
    li.style.backgroundColor = corFavorita;
    
    historicoLista.appendChild(li);

    input.value = "";
    input.focus();
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
});