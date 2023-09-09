import { sumar, restar, multiplicar, dividir } from './utils'

console.log(sumar(125, 455))
console.log(restar(125, 455))
console.log(multiplicar(125, 455))
console.log(dividir(125, 455))

for (let i = 0; i < 1000; i++) {
  console.log(sumar(125, 455))
  console.log(restar(125, 455))
  console.log(multiplicar(125, 455))
  console.log(dividir(125, 455))
}
