var agora = new Date()
var hora = agora.getHours()
console.log(`Sao Exatamente ${hora} horas.`)
if (hora < 11.591) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 17.591) {
    console.log('Boa tarde!')
} else  {
    console.log('Boa noite')
}