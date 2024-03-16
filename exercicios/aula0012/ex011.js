var idade = 70
console.log(`Voçe tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 69) {
    console.log('Voto Opcional!')
} else {
    console.log('Voto Obrigatorio!')
}

