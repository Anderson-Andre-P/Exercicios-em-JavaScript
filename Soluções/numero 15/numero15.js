// Escreva um programa que receba o salário-base de um funcionário, calcule e imprima o salário a receber, sabendo que esse funcionário tem uma gratificação de 5% sobre o salário-base. Além disso, paga 7% de imposto sobre o salário-base.

const salarioBase = Number(prompt('Digite o salário base do funcionário'));
const gratificacao = salarioBase * (5 / 100);
const imposto = salarioBase * (7 / 100);
const salarioFinal = salarioBase + gratificacao - imposto;

alert(`O funcionário recebe um salário final de R$${salarioFinal}`);
