let Foods = 0;
let Drinks = 0;
let Deserts = 0;

// MUDAR A COR DO FOOTER AO SELECIONAR TODOS OS ITENS 
function mudarFooter() {
    let mudarFooterBackground;
    let RemoverFooterTexto1;
    let AdicionarFooterTexto2;

    if ((Foods === 1) && (Drinks === 1) && (Deserts === 1)) {
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
function selecionarOpcaoComidas(comidas) {
    let outrasComidas = document.querySelectorAll(".opcoes-comidas")
    for (let i = 0; i < outrasComidas.length; i++) {
        outrasComidas[i].classList.remove("article_selecionar");
    }
    comidas.classList.add("article_selecionar");
    Foods = 1;
    mudarFooter();
}

// BEBIDAS
function selecionarOpcaoBebidas(bebidas) {
    let outrasBebidas = document.querySelectorAll(".opcoes-bebibas")
    for (let i = 0; i < outrasBebidas.length; i++) {
        outrasBebidas[i].classList.remove("article_selecionar");
    }
    bebidas.classList.add("article_selecionar");
    Drinks = 1;
    mudarFooter();
}

// SOBREMESAS
function selecionarOpcaoSobremesas(sobremesas) {
    let outrasSobremesas = document.querySelectorAll(".opcoes-sobremesas")
    for (let i = 0; i < outrasSobremesas.length; i++) {
        outrasSobremesas[i].classList.remove("article_selecionar");
    }
    sobremesas.classList.add("article_selecionar");
    Deserts = 1;
    mudarFooter();
}






// BOTÃO DE CANCELAR O PEDIDO
function botaoCancelar() {
    let esconderConfirmacao = document.querySelector(".confirmar-pedido");
    esconderConfirmacao.classList.add("hidden");
}