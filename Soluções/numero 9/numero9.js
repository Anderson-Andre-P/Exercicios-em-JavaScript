// Faça um programa que receba a cotação do dólar e um valor em real e seu programa deverá imprimir o valor em dólares. (considerei R$5.15 = US$1.00)

const reais = Number(prompt('Digite quantos reais quer converter par dólares'));

const dolares = 5.16;

alert(`R$${reais} = US$${reais * dolares}`)
