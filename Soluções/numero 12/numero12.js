// Faça um programa que receba o valor do salário de um funcionário e o percentual de aumento. Seu programa deve mostrar o valor do novo salário.

const salario = Number(prompt('Digite seu salário'));
const aumento = Number(prompt('Digite a % de aumento'));

const valorFinal = (salario * (aumento / 100)) + salario;

alert(`(${salario} * (${aumento} / 100)) + ${salario} = ${valorFinal}`);






