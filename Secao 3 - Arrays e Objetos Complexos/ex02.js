// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

vendas = [
    { cliente: "Cliente A", total: 100 },
    { cliente: "Cliente B", total: 200 },
    { cliente: "Cliente A", total: 150 },
    { cliente: "Cliente C", total: 300 }
]

function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda
        if (!acumulador[cliente]) {
            acumulador[cliente] = 0
        }
        acumulador[cliente] += total
        return acumulador
    }, {})
}

console.log(agruparPorCliente(vendas))