function verificar() {
    const sorteados = Array.from(document.querySelectorAll('.numSort')).map(input => Number(input.value));
    const apostados = Array.from(document.querySelectorAll('.meuNum')).map(input => Number(input.value));

    // Validação: checar se há campos vazios
    if (sorteados.includes(0) || apostados.includes(0)) {
        document.getElementById("resposta").innerText = "Preencha todos os números corretamente!";
        return;
    }

    // Verificar acertos
    const acertos = apostados.filter(num => sorteados.includes(num));
    const resultado = `Você acertou ${acertos.length} número(s): ${acertos.join(', ')}`;
    document.getElementById("resposta").innerText = resultado;
}

function novaChecagem() {
    // Limpa todos os inputs
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
    });

    // Limpa o texto do resultado
    document.getElementById("resposta").innerText = "Seu resultado irá aparecer aqui";
}
