// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    let cache = {};

    return function(argumento){
        if (cache[argumento]) {
            return cache[argumento];
        } else {
            let resultado = fn(argumento);
            cache[argumento] = resultado;
            return resultado;
        }
    }
}

