function comprar() {
    let tipoIngresso = document.querySelector('#tipo-ingresso').value;
    obterESubtrairOsIngressos(tipoIngresso);
}

function obterESubtrairOsIngressos(id) {
    let elementoIngresso = document.querySelector(`#qtd-${id}`)
    let ingresso = Number(elementoIngresso.textContent);
    let quantidade = Number(document.querySelector('#qtd').value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Digite um número válido');
        return;
    }
    if (quantidade > ingresso) {
        alert('Quantidade indisponível para este tipo de ingresso.');
        return;
    }
    ingresso -= quantidade;
    elementoIngresso.textContent = ingresso;
    document.querySelector('#qtd').value = '';
}