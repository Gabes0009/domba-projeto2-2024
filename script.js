// Seleciona todos os botões com a classe 'btn-proximo'
const avancarButtons = document.querySelectorAll('.btn-proximo');

// Adiciona um event listener a cada botão
avancarButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o passo atual e o próximo passo com base no botão clicado
        const passoAtual = document.querySelector('.passo.ativo');
        const proximoPassoId = 'passo-' + button.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        // Remove a classe 'ativo' do passo atual
        if (passoAtual) {
            passoAtual.classList.remove('ativo');
        }

        // Adiciona a classe 'ativo' ao próximo passo, se ele existir
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});
