function comprar(){
    let PERA = 10*(qtd_pera);
    let MACA = 20*(qtd_maca);
    let CEREJA = 50*(qtd_cereja);
    let KIWI = 25*(qtd_kiwi); 
    let ValorTotal = PERA + MACA + CEREJA + KIWI
     
    if(ValorTotal > 0){
        resultado.innerHTML = `O valor total da sua compra foi de: R$${ValorTotal},00`
        // total_compra.src = '../imagens/escoar.png'
    } 
}