// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 }
]

function ordenarPreco(){
    return produtos
        .map(produto => produto.nome)
        .sort((a, b) => {
            const precoA = produtos.find(produto => produto.nome === a).preco
            const precoB = produtos.find(produto => produto.nome === b).preco
            return precoA - precoB
        })
}

console.log(ordenarPreco()); // ["Produto B", "Produto A", "Produto C"]