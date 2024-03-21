
function contar() {
    var ini = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtn3')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        res.innerHTML = '[erro]...preencha todos os campos!'
    } else {
        res.innerHTML = 'contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){
            for(var a = i; a <= f; a += p){
                res.innerHTML += `${a} \u{1F449}`
            
            }
        } else {
            for(var a = i; a >= f; a -= p){
                res.innerHTML += `${a} \u{1F449}`
            }
        }
        res.innerHTML += `fim`

    }

}

