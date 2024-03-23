let valores = [1,9,9,2]
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}