// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

let pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]
let objeto = { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' }

function paresParaObjeto(pares) {
    return pares.reduce((objeto, [chave, valor]) => {
        objeto[chave] = valor
        return objeto
    }, {})
}

function objetoParaPares(obj) {
    return Object.entries(obj).map(([chave, valor]) => [chave, valor])
}


console.log(paresParaObjeto(pares)) 
console.log(objetoParaPares(objeto)) 

