let contadorFoods = 0;
let contadorDrinks = 0;
let contadorDeserts = 0;

// MUDAR A COR DO FOOTER AO SELECIONAR TODOS OS ITENS 
function mudarFooter() {
    let mudarFooterBackground;
    let RemoverFooterTexto1;
    let AdicionarFooterTexto2;

    if ((contadorFoods === 1) && (contadorDrinks === 1) && (contadorDeserts === 1)) {
        mudarFooterBackground = document.querySelector(".footer_dentro");
        mudarFooterBackground.classList.add("background-green");

        RemoverFooterTexto1 = document.querySelector(".footer_dentro_selecionar-todos");
        RemoverFooterTexto1.classList.add("hidden");

        AdicionarFooterTexto2 = document.querySelector(".footer_dentro_todos-selecionados");
        AdicionarFooterTexto2.classList.remove("hidden");
    }
}

// COLOCAR BORDA VERDE NO SELECIONADO E TIRAR DOS DEMAIS

// COMIDAS
let precoComida = 0;
function selecionarOpcaoComidas(comidas) {
    const testeSelecionados = document.querySelector(".article_selecionar-comida");
    if (testeSelecionados !== null) {
        testeSelecionados.classList.remove("article_selecionar-comida");
    }
    comidas.classList.add("article_selecionar-comida");

    const iconeSelecionado = document.querySelector(".shown-icone-comidas");
    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove("shown-icone-comidas");
    }
    const icone = comidas.querySelector(".icone");
    icone.classList.add("shown-icone-comidas");

    contadorFoods = 1;

    // JS PARA A TELA DO BONUS
    const comidaSelecionada = document.querySelector(".article_selecionar-comida .titulo-comida");
    const textoComidaSelecionada = comidaSelecionada.innerHTML;

    const comidaSelecionadaPreco = document.querySelector(".article_selecionar-comida .preco-comida");
    textoPrecoComidaSelecionada = comidaSelecionadaPreco.innerHTML;

    document.querySelector(".confirmar-pedidos-comida").innerHTML = "<p>" + textoComidaSelecionada + "</p>" + "<p>" + textoPrecoComidaSelecionada + "</p>";

    precoComida = document.querySelector(".article_selecionar-comida .main_barrra_itens_preco-com-ponto").innerHTML;
    // CHAMANDO A FUNÇÃO PARA APARECER A TELA DO BONUS
    mudarFooter();
}

// BEBIDAS
let precoBebida = 0;
function selecionarOpcaoBebidas(bebidas) {
    const testeSelecionados = document.querySelector(".article_selecionar-bebida");
    if (testeSelecionados !== null) {
        testeSelecionados.classList.remove("article_selecionar-bebida");
    }

    bebidas.classList.add("article_selecionar-bebida");

    const iconeSelecionado = document.querySelector(".shown-icone-bebidas");
    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove("shown-icone-bebidas");
    }
    const icone = bebidas.querySelector(".icone");
    icone.classList.add("shown-icone-bebidas");

    contadorDrinks = 1;

    // JS PARA A TELA DO BONUS
    const bebidaSelecionada = document.querySelector(".article_selecionar-bebida .titulo-bebida");
    const textoBebidaSelecionada = bebidaSelecionada.innerHTML;

    const bebidaSelecionadaPreco = document.querySelector(".article_selecionar-bebida .preco-bebida");
    const textoPrecoBebidaSelecionada = bebidaSelecionadaPreco.innerHTML;

    document.querySelector(".confirmar-pedidos-bebida").innerHTML = "<p>" + textoBebidaSelecionada + "</p>" + "<p>" + textoPrecoBebidaSelecionada + "</p>";

    precoBebida = document.querySelector(".article_selecionar-bebida .main_barrra_itens_preco-com-ponto").innerHTML;
    mudarFooter();
}

// SOBREMESAS
let precoSobremesa = 0;
function selecionarOpcaoSobremesas(sobremesas) {
    const testeSelecionados = document.querySelector(".article_selecionar-sobremesa");
    if (testeSelecionados !== null) {
        testeSelecionados.classList.remove("article_selecionar-sobremesa");
    }

    sobremesas.classList.add("article_selecionar-sobremesa");


    const iconeSelecionado = document.querySelector(".shown-icone-sobremesas");
    if (iconeSelecionado !== null) {
        iconeSelecionado.classList.remove("shown-icone-sobremesas");
    }
    const icone = sobremesas.querySelector(".icone");
    icone.classList.add("shown-icone-sobremesas");


    contadorDeserts = 1;


    // JS PARA A TELA DO BONUS
    const sobremesaSelecionada = document.querySelector(".article_selecionar-sobremesa .titulo-sobremesa");
    const textoSobremesaSelecionada = sobremesaSelecionada.innerHTML;

    const sobremesaSelecionadaPreco = document.querySelector(".article_selecionar-sobremesa .preco-sobremesa");
    textoPrecoSobremesaSelecionada = sobremesaSelecionadaPreco.innerHTML;

    document.querySelector(".confirmar-pedidos-sobremesa").innerHTML = "<p>" + textoSobremesaSelecionada + "</p>" + "<p>" + textoPrecoSobremesaSelecionada + "</p>";

    precoSobremesa = document.querySelector(".article_selecionar-sobremesa .main_barra_itens_preco-com-ponto ").innerHTML;

    mudarFooter();
}


// TELA DE CONFIRMAÇÃO DO PEDIDO
function telaConfirmarPedido() {
    if ((contadorFoods === 1) && (contadorDrinks === 1) && (contadorDeserts === 1)) {
        const confirmarPedido = document.querySelector(".confirmar-pedido");
        confirmarPedido.classList.remove("hidden");
    }
    somaTotal();
}


// BOTÃO DE CANCELAR O PEDIDO
function botaoCancelar() {
    let esconderConfirmacao = document.querySelector(".confirmar-pedido");
    esconderConfirmacao.classList.add("hidden");
}

// SOMA DO TOTAL

function somaTotal() {
    let somaTotal = 5;
    somaTotal = parseFloat(precoSobremesa) + parseFloat(precoBebida) + parseFloat(precoComida);
    somaTotalTexto = somaTotal.toFixed(2).toString().replace(".", ",");
    document.querySelector(".confirmar-pedido_total").innerHTML = "<p> Total </p>" + "<p> R$ " + somaTotalTexto + "</p>";

}
