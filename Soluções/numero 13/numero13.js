/* Um prêmio de 456.000,00 será dividido entre três ganhadores com a seguinte distribuição:

1º Lugar - 50% do prêmio

2º Lugar - 30% do prêmio

3º Lugar - resto do valor 

Seu programa deverá mostrar o valor que cada ganhador deverá receber. */

const premio = 456000.00;
const num1 = (50 / 100 * premio);
const num2 = (30 / 100 * premio);
const num3 = premio - num1 - num2;

alert(`Prêmio: ${premio}\nO 1º lugar ganhou: ${num1}\nO 2º lugar ganhou: ${num2}\nO 3º lugar ganhou: ${num3}`);
