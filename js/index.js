const elementos = [
    document.getElementById("Bruna"),
    document.getElementById("Fernanda"),
    document.getElementById("Olivia"),
    document.getElementById("Andre"),
];

// Botões de seta
const setaEsquerda = document.getElementById("setaEsquerda");
const setaDireita = document.getElementById("setaDireita");

// Índice inicial
let indiceAtual = 0;

// Função para atualizar a exibição
function atualizarExibicao() {
    elementos.forEach((el, index) => {
        // Exibe apenas os dois elementos visíveis com base no índice atual
        el.style.display = (index === indiceAtual || index === (indiceAtual + 1) % elementos.length) ? "flex" : "none";
    });

    // Ajustar visibilidade das setas
    setaEsquerda.style.display = indiceAtual === 0 ? "none" : "flex";
    setaDireita.style.display = indiceAtual === elementos.length - 2 ? "none" : "flex";
}

// Função para rolar para a direita
function RolarParaDireita() {
    if (indiceAtual < elementos.length - 2) {
        indiceAtual++;
        atualizarExibicao();
    }
}

// Função para rolar para a esquerda
function RolarParaEsquerda() {
    if (indiceAtual > 0) {
        indiceAtual--;
        atualizarExibicao();
    }
}

// Eventos de clique nas setas
setaDireita.addEventListener("click", RolarParaDireita);
setaEsquerda.addEventListener("click", RolarParaEsquerda);

// Inicializar exibição
atualizarExibicao();

function BotaoInscrever() {
    window.location.href = ("formulario.html")
}

function BotaoInicio(){
    window.location.href = ("index.html")

}



