// window.addEventListener("load", start);
// let pera = document.querySelector("#pera");
// let maca = document.querySelector("#maca");
// let kiwi = document.querySelector("#kiwi");
// let cereja = document.querySelector("#cereja");

// let inputPera = document.querySelector("#input_pera");
// let inputMaca = document.querySelector("#input_maca");
// let inputKiwi = document.querySelector("#input_kiwi");
// let inputCereja = document.querySelector("#input_cereja");

// let totalCompraDiv = document.querySelector(".total_compra");

// function render() {
//   pera.addEventListener("change", function (event) {
//     colocarValorNoInput(inputPera, event.target.value);
//     totalCompraDiv.innerHTML = `
//     <h2> R$${comprar()},00 </h2>
//     `;
//   });
//   maca.addEventListener("change", function (event) {
//     colocarValorNoInput(inputMaca, event.target.value);
//     totalCompraDiv.innerHTML = `
//     <h2> R$${comprar()},00 </h2>
//     `;
//   });
//   kiwi.addEventListener("change", function (event) {
//     colocarValorNoInput(inputKiwi, event.target.value);
//     totalCompraDiv.innerHTML = `
//     <h2> R$${comprar()},00 </h2>
//     `;
//   });
//   cereja.addEventListener("change", function (event) {
//     colocarValorNoInput(inputCereja, event.target.value);
//     totalCompraDiv.innerHTML = `
//     <h2> R$${comprar()},00 </h2>
//     `;
//   });
// }

// function colocarValorNoInput(inputFruta, valor) {
//   inputFruta.value = valor;
// }
// function comprar() {
//   let valorTotalPera = 10 * pera.value;
//   let valorTotalMaca = 15 * maca.value;
//   let valorTotalKiwi = 20 * kiwi.value;
//   let valorTotalCereja = 50 * cereja.value;
//   let totalCompra =
//     valorTotalPera + valorTotalMaca + valorTotalKiwi + valorTotalCereja;

//   return totalCompra;
// }

// function start() {
//   render();
// }
