var peso = Number(prompt("Digite seu Peso: "))
var altura = Number(prompt("Agora digite sua Altura: "))

var imc = peso / (altura ** 2) 

if(imc < 18.5) {
    alert("Você está abaixo do peso ideal")
}else if(imc > 18.5 && imc < 24.9) {
    alert("VocÊ está no peso ideal")
}else if(imc > 25 && imc < 29.9) {
    alert("Você está em sobrepeso")
}else {
    alert("Você está em obesidade")
}