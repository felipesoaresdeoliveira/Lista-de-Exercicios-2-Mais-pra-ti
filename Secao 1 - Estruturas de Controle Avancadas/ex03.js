const prompt = require('prompt-sync')()

let frase = prompt('Digite uma frase: ')

function verificarPalavraUnica(frase) {
    let palavras = frase.toLowerCase().split(' ').filter(p => p.trim() !== '')

    if (palavras.length === 0) return ['Nenhuma palavra encontrada']

    let todasIguais = true
    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i] !== palavras[0]) {
            todasIguais = false;
            break;
        }
    }

    if (todasIguais) {
        return ["Todas as palavras são iguais"]
    }

    let palavrasUnicas = []

    for (let i = 0; i < palavras.length; i++) {
        let contador = 0
        for (let j = 0; j < palavras.length; j++) {
            if (palavras[i] === palavras[j]) {
                contador++
            }
        }
        if (contador === 1) {
            palavrasUnicas.push(palavras[i])
        }
    }

    return palavrasUnicas

}

console.log(verificarPalavraUnica(frase))
