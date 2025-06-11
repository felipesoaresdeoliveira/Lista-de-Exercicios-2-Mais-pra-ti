// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let tempo

    return function(n1, n2) {
        clearTimeout(tempo)
        tempo = setTimeout(() => {
            fn(n1, n2)
        }, delay)
    }
}

console.log(debounce((n1, n2) => {
    console.log(n1 + n2)
}, 1000)(5, 10))