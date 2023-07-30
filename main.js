// let a = 10
// function outer(){
//     let b = 20
//     function inner(){
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()

// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()
// fn()

// function sum(a, b, c){
//     return a + b + c
// }
// console.log(sum(2,3,5))

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)

// function sayMyName(name){
//     console.log(`My name is ${name}`)

// }
// sayMyName('Adeyemo Femi')
// sayMyName('Oluwafemi')

const person = {
    name: `Femi_code`,
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}
// person.sayMyName()
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

// sayMyName.call(person)
// globalThis.name = `Oluwafemi`
// function Person(name){
//     this.name = name
// }

// const p1 = new Person(`Ayomide`)
// const p2 = new Person(`Oluwafemi`)

// console.log(p1.name, p2.name)

// sayMyName()

function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new Person('Adeyemo', 'Ayomide')
const person2 = new Person('Adeyemo', 'Emmanuel')
const person3 = new Person('Adeyemo', 'Esther')

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
 person2.getFullName = function () {
     return this.firstName + ' ' + this.lastName
 }
 function superHero(){
    this.isSuperHero = true
 }

// console.log(person1.getFullName())
// console.log(person2.getFullName())
// console.log(person3.getFullName())