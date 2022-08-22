console.log([, , ,].length);



let nombres = 'Carlos / Jose / Sandra / Ana / Rosa'
let aNombres = nombres.split()
console.log('aNombres', aNombres);
console.log(aNombres.length);

/* const employe = {
    firstName: 'Pedro',
    age: 30
}
const street = employe.addres.street */


const promise1 = () => {
    return new Promise((resolve, reject) => { setTimeout(() => resolve('promise1 fullfilled'), 2000); })
}
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('promise2 fullfilled'), 1000);
    })
}
 promise1().then((result) => { console.log(result); promise2().then((result) => console.log(result)); })

// Promise.all([promise2(), promise1()]).then((result) => { console.log(result); })


console.log(0.2 + 0.1 === 0.3);


const fruits = ['manzana', 'pera', 'uva', 'guayaba']
const { fruit1, fruit2 } = fruits
console.log(fruit1);


let condicion1, resultado, condicion2
condicion1 = 2 > 8
condicion2 = 8 > 2
resultado = condicion1 && condicion2
console.log(resultado);

var first = [1, 2, 3, 4, 5]
var second = [1, 2, 3, 4]
var isEqual = first.length === second.length && first.every((value, index) => value === second[index])
console.log(isEqual);

console.log(('o___o'.padStart(10, ' - ')).padEnd(15, ' - '));

console.log('1100_00');
