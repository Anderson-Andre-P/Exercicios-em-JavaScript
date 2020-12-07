// Faça um programa que leia o valor do raio e a altura de um cilindro e calcule o volume. Para esse cálculo, use: 𝐴=ℎ𝜋𝑟^2. Onde 𝜋 vale: 3.141592

const raio = Number(prompt('Digite o valor do raio'));
const altura = Number(prompt('Digite o valor da altura'));

alert(`Área = ${altura} x ${Math.PI.toFixed(4)} x ${raio} ^ 2 = ${(altura * (Math.PI) * (raio ** 2)).toFixed(4)}`);

