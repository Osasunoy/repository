// Função para obter parâmetros da barra de consulta
function obterParametroDaUrl(nome) {
    nome = nome.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + nome + "=([^&#]*)");
    var resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1].replace(/\+/g, " "));
}

var estoque = JSON.parse(obterParametroDaUrl('estoque'));

if (estoque && estoque.length > 0) {
    mostrarRelatorio();
}

function mostrarRelatorio() {
    var outputDiv = document.getElementById("output-relatorio");
    outputDiv.innerHTML = "";

    for (var i = 0; i < estoque.length; i++) {
        var produto = estoque[i].produto;
        var quantidade = estoque[i].quantidade;
        var especificacoes = estoque[i].especificacoes;

        var produtoDiv = document.createElement("div");
        produtoDiv.innerHTML = "<strong>Produto:</strong> " + produto + " | <strong>Quantidade:</strong> " + quantidade +
            (especificacoes ? " | <strong>Especificações:</strong> " + especificacoes : "");

        outputDiv.appendChild(produtoDiv);
    }
}
