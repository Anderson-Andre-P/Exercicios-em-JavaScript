// Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são descontados 8% para imposto de renda.

const dias = Number(prompt('Quantos dias o encanador trabalhou?'));
const salarioBruto = dias * 30;
const salarioLiquido = salarioBruto - (salarioBruto * (8 / 100));

alert(`O encanador receberá R$${salarioLiquido} por ter trabalhado ${dias} dias.`)
