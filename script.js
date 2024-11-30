// Inicializar placar
let pontosDragao1 = 0;
let pontosDragao2 = 0;

// Função para revelar o atributo do dragão da direita
function revelarValorAtributo(atributo) {
    const elementoValor = document.getElementById(`${atributo}-dragao2`);
    const valorReal = elementoValor.getAttribute("data-valor");
    elementoValor.textContent = valorReal;
    elementoValor.classList.remove("ocultar");
}

// Função para comparar os valores dos atributos
function compararAtributo(atributo) {
    const valorDragao1 = parseInt(document.getElementById(`${atributo}-dragao1`).textContent);
    const valorDragao2 = parseInt(document.getElementById(`${atributo}-dragao2`).textContent);

    if (valorDragao1 > valorDragao2) {
        pontosDragao1++;
    } else if (valorDragao2 > valorDragao1) {
        pontosDragao2++;
    }

    // Atualizar o placar
    document.getElementById("pontos-dragao1").textContent = pontosDragao1;
    document.getElementById("pontos-dragao2").textContent = pontosDragao2;
}

// Adicionar evento para cada botão de comparação
const botoesComparar = document.querySelectorAll(".compare");
botoesComparar.forEach(botao => {
    botao.addEventListener("click", () => {
        const atributo = botao.getAttribute("data-atributo");
        revelarValorAtributo(atributo);
        compararAtributo(atributo);
    });
});
