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



// COMIDAS
let nomeComidaSelecionada = null;
let precoComida = 0;
function selecionarOpcaoComidas(comidas) {

    // COLOCAR BORDA VERDE NO SELECIONADO E TIRAR DOS DEMAIS
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

    // JS PARA A TELA DO BONUS E WHATSAPP
    const comidaSelecionada = document.querySelector(".article_selecionar-comida .titulo-comida");
    const textoComidaSelecionada = comidaSelecionada.innerHTML;
    const comidaSelecionadaPreco = document.querySelector(".article_selecionar-comida .main_barrra_itens_preco-com-ponto");
    const textoPrecoComidaSelecionada = comidaSelecionadaPreco.innerHTML.replace(".", ",");

    document.querySelector(".confirmar-pedidos-comida").innerHTML = "<p>" + textoComidaSelecionada + "</p>" + "<p>" + textoPrecoComidaSelecionada + "</p>";

    precoComida = document.querySelector(".article_selecionar-comida .main_barrra_itens_preco-com-ponto").innerHTML;

    nomeComidaSelecionada = document.querySelector(".article_selecionar-comida .titulo-comida").innerText;

    // CHAMANDO A FUNÇÃO PARA APARECER A TELA DO BONUS
    mudarFooter();
}

// BEBIDAS
let nomeBebidaSelecionada = null;
let precoBebida = 0;
function selecionarOpcaoBebidas(bebidas) {
    // COLOCAR BORDA VERDE NO SELECIONADO E TIRAR DOS DEMAIS
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

    // JS PARA A TELA DO BONUS E WHATSAPP
    const bebidaSelecionada = document.querySelector(".article_selecionar-bebida .titulo-bebida");
    const textoBebidaSelecionada = bebidaSelecionada.innerHTML;
    const bebidaSelecionadaPreco = document.querySelector(".article_selecionar-bebida .main_barrra_itens_preco-com-ponto");
    const textoPrecoBebidaSelecionada = bebidaSelecionadaPreco.innerHTML.replace(".", ",");

    document.querySelector(".confirmar-pedidos-bebida").innerHTML = "<p>" + textoBebidaSelecionada + "</p>" + "<p>" + textoPrecoBebidaSelecionada + "</p>";

    precoBebida = document.querySelector(".article_selecionar-bebida .main_barrra_itens_preco-com-ponto").innerHTML;

    nomeBebidaSelecionada = document.querySelector(".article_selecionar-bebida .titulo-bebida").innerText;

    // CHAMANDO A FUNÇÃO PARA APARECER A TELA DO BONUS
    mudarFooter();
}

// SOBREMESAS
let nomeSobremesaSelecionada = null;
let precoSobremesa = 0;
function selecionarOpcaoSobremesas(sobremesas) {
    // COLOCAR BORDA VERDE NO SELECIONADO E TIRAR DOS DEMAIS
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


    // JS PARA A TELA DO BONUS E WHATSAPP
    const sobremesaSelecionada = document.querySelector(".article_selecionar-sobremesa .titulo-sobremesa");
    const textoSobremesaSelecionada = sobremesaSelecionada.innerHTML;
    const sobremesaSelecionadaPreco = document.querySelector(".article_selecionar-sobremesa .main_barra_itens_preco-com-ponto");
    const textoPrecoSobremesaSelecionada = sobremesaSelecionadaPreco.innerHTML.replace(".", ",");

    document.querySelector(".confirmar-pedidos-sobremesa").innerHTML = "<p>" + textoSobremesaSelecionada + "</p>" + "<p>" + textoPrecoSobremesaSelecionada + "</p>";

    precoSobremesa = document.querySelector(".article_selecionar-sobremesa .main_barra_itens_preco-com-ponto ").innerHTML;

    nomeSobremesaSelecionada = document.querySelector(".article_selecionar-sobremesa .titulo-sobremesa").innerText;

    // CHAMANDO A FUNÇÃO PARA APARECER A TELA DO BONUS
    mudarFooter();
}


// SOMA DO TOTAL
let total = null;
function somaTotal() {

    total = parseFloat(precoSobremesa) + parseFloat(precoBebida) + parseFloat(precoComida);
    somaTotalTexto = total.toFixed(2).toString().replace(".", ",");
    document.querySelector(".confirmar-pedido_total").innerHTML = "<p> TOTAL </p>" + "<p> R$ " + somaTotalTexto + "</p>";
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

// WHATSAPP
let nomeCliente = null;
let enderecoCliente = null;
let textoEncodado = null;
function nomeEnderecoCliente() {
    nomeCliente = prompt("Qual o seu nome?");
    enderecoCliente = prompt("Qual o seu endereço?");

    textoEncodado = encodeURIComponent("Olá, gostaria de fazer o pedido: " + "\n" +
        "- Prato: " + nomeComidaSelecionada + "\n" +
        "- Bebida: " + nomeBebidaSelecionada + "\n" +
        "- Sobremesa: " + nomeSobremesaSelecionada + "\n" +
        "Total: R$ " + (total.toFixed(2).replace(".", ",")) + "\n" + "\n" +
        "Nome: " + nomeCliente + "\n" +
        "Endereço: " + enderecoCliente);

    window.open("https://wa.me/5544999999999?text=" + textoEncodado);
}
