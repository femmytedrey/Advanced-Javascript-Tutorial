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

// function Person(fName, lName){
    // this.firstName = fName
    // this.lastName = lName
// }

// const person1 = new Person('Adeyemo', 'Ayomide')
// const person2 = new Person('Adeyemo', 'Emmanuel')
// const person3 = new Person('Adeyemo', 'Esther')

// Person.prototype.getFullName = function () {
    // return this.firstName + ' ' + this.lastName
// }
//  person2.getFullName = function () {
    //  return this.firstName + ' ' + this.lastName
//  }
//  function SuperHero(fName, lName){
    // Person.call(this, fName, lName)
    // this.isSuperHero = true
//  }
//  SuperHero.prototype.fightCrime = function () {
    // console.log(`Fighting crime`)
//  }

//  SuperHero.prototype = Object.create(Person.prototype)

//  const batman = new SuperHero('Adeyemo', 'Femi')
//  console.log(batman.getFullName())
//  SuperHero.prototype.constructor = SuperHero

// console.log(person1.getFullName())
// console.log(person2.getFullName())
// console.log(person3.getFullName())

// class Person {
//     constructor(fName, lName){
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName(){
//         return this.firstName + ' ' + this.lastName
//     }    
// }

// const classP1 = new Person('Adeyemo', 'Ayomide')
// console.log(classP1.sayMyName())

// class SuperHero extends Person {
//     constructor(fName, lName){
//         super(fName, lName)
//         this.isSuperHero = true
//     }
//     fightCrime(){
//         console.log('Fighting crime')
//     }
// }

// const batman = new SuperHero('Adeyemo Ayomide')
// console.log(batman.sayMyName())

const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function(){
                step++
                if(step === 1){
                    return{value: 'Hello', done: false}
                } else if(step === 2){
                    return{value: 'World', done: false}
                }
                return{value: undefined, done: true}
            },
        }
     return iterator   
    },
}

// for(const word of obj){
//     console.log(word);
// }

function normalFunction() {
    console.log('Hello')
    console.log('World')
}
// normalFunction()

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction()
    for(const word of generatorObject){
    console.log(word)
}
