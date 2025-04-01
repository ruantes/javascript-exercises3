var idade1 = Number(prompt("Digite uma Idade: "))
var idade2 = Number(prompt("Digite outra Idade: "))

if(idade1 == idade2) {
    alert(`${idade1} anos é igual a ${idade2} anos`)
} else if(idade1 > idade2) {
    alert(`${idade1} anos é mais velho que ${idade2} anos`)
}else {
    alert(`${idade2} anos é mais velho que ${idade1} anos`)
}