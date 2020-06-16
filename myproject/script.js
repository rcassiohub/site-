function comprar(){
    let PERA = (qtd_pera.value)*20;
    let MACA = (qtd_maca.value)*25;
    let CEREJA = (qtd_cereja.value)*50;
    let KIWI = (qtd_kiwi.value)*30; 
    let ValorTotal = PERA + MACA + CEREJA + KIWI;
     
    if(ValorTotal > 0){
        resultado.innerHTML = `O valor total da sua compra foi de: R$${ValorTotal},00 <br>`;
        confirmacao_da_compra.innerHTML = ` <button onclick="analisar()" class="confirmar_compra" >Confirmar Compra</button>`
        // total_compra.src = '../imagens/escoar.png'
    } 
}
function analisar(){
    img_carrinho.src ="../imagens/vendas.png" ;
    resultado_compra.innerHTML = "Sua compra foi realizada com sucesso!";
}