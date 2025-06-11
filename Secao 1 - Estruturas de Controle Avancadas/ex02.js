// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()


console.log('Bem-vindo ao jogo de adivinhação!')
userNumber = parseInt(prompt('Digite um número de 1 a 100: '))

const numAleatorio = Math.floor(Math.random() * 100) + 1
console.log(`O número aleatório gerado é: ${numAleatorio}`)
let tentativas = 1

while (userNumber !== numAleatorio) {
    if (userNumber < numAleatorio) {
        console.log('Errou, o numero é Mais alto!')
    } else {
        console.log('Errou, o numero é Mais baixo!')
    }


    console.log(`Tentativas: ${tentativas}`)
    userNumber = parseInt(prompt('Tente novamente: '))
    tentativas++
}

if(numAleatorio == userNumber) {
        console.log('Parabéns, você acertou!')
        console.log('Obrigado por jogar!')
    }