var prompt = require('prompt-sync')()

var altura  = prompt('Digite sua altura: ')
var peso = prompt('Digite seu peso: ')

var imc = peso / (altura*altura)

if ( imc < 18.49 ) {
  console.log('Você está abaixo do peso normal')
} else if (imc >= 18.5 && imc <= 24.9){
  console.log('Você está no peso normal')
} else if (imc>=25) {
  console.log('Você está acima do peso')
}