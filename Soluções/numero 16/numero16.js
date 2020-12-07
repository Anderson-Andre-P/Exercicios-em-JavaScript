/* Escreva um algoritmo para criar um programa de ajuda para vendedores. A partir de um valor total lido, mostre:
- o total a pagar com desconto de 10%;
- o valor de cada parcela, no parcelamento de 3 x sem juros;
- a comissão do vendedor, no caso de a venda ser a vista (5% sobre o valor com desconto)
- a comissão do vendedor, no caso de a venda ser parcelada (5% sobre o valor total) */

const total = Number(prompt('Informe o total em R$ da compra'));
const desconto = total - (total * (10 / 100));
const parcelado = total / 3;
const comisaoAVista = 5 / 100 * desconto;
const comissaoParcelada = 5 / 100 * total;

alert(`Com desconto de 10% a compra sai por R$${(desconto).toFixed(2)} e o vendedor receberá uma comissão de R$${(comisaoAVista).toFixed(2)}.\n
Se parcelado, cada parcela custará R$${(parcelado).toFixed(2)} e o vendedor receberá uma comissão de R$${(comissaoParcelada).toFixed(2)}.\n`);











