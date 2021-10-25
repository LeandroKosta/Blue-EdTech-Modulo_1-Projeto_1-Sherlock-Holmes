const prompt = require("prompt-sync")();
//Título do Jogo.
console.log('DETETIVE BLUE');
console.log();
//Explicação da funcionalidade para o usuário.
console.log('Responda as perguntas abaixo com:\nS (para SIM) ou \nN (para NÃO)');
console.log();
//Utilizando o const nas variáveis, prompt para receber os dados, .toUpperCase() para retornar o valor da string convertido em letras maiúsculas, utilizando o operador de igual (==), para fazer o comparativo na resposta do usuário, utilizei o operador ternário, para fazer a comparação da resposta do usuário, assim simplificando, para o contador receber o resultado.
const p1 = (prompt('Telefonou para a vítima? (S/N)').toUpperCase() =='S')?1:0;
const p2 = (prompt('Esteve no local do crime? (S/N)').toUpperCase() =='S')?1:0;
const p3 = (prompt('Mora perto da vítima? (S/N)').toUpperCase() =='S')?1:0;
const p4 = (prompt('Devia para a vítima? (S/N)').toUpperCase() =='S')?1:0;
const p5 = (prompt('Já trabalhou com a vítima? (S/N)').toUpperCase() =='S')?1:0;
//Contador de respostas do usuário.
let cont = p1 + p2 + p3 + p4 + p5;
//Duas respostas sim, vai exibir essa infomação.
if (cont == 2){
  console.log('Você é Suspeito!')
}
//Três ou Quatro respostas sim, vai exibir essa infomação.
else if (cont == 3 || cont == 4){
  console.log('Você é Cúmplice!!')
}
//Cinco respostas sim, vai exibir essa infomação.
else if (cont == 5){
  console.log('Você é o Assassino!!!')
}
//Uma resposta sim, vai exibir essa informação.
else {
  console.log('Você é Inocente!!!!')
}