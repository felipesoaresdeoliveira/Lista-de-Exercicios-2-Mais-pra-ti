// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.



function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false
    }

      const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      const ehAnoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)


      if(ehAnoBissexto && mes === 2) {
        return dia <= 29
      }

        return dia <= diasNoMes[mes - 1]

}

console.log(ehDataValida(29, 2, 2020))
console.log(ehDataValida(29, 2, 2024))
console.log(ehDataValida(31, 4, 2022))
console.log(ehDataValida(31, 12, 2023))