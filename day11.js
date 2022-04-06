// function cb() {
//     console.log('hi after 3 seconds')
// }

// setTimeout(function () {
//     console.log('hi')
// }, 3000)

// console.log('print after')

// function fun() {
//     var a = 10

//     setTimeout(function () {
//         console.log(a)
//     }, 3000)

//     console.log('Inside fun')
// }

// fun()

// setTimeout(function () {
//     console.log(1)
// }, 1000)

// function outer() {
//     var num = 5
//     function inner() {
//         console.log(num)
//     }
//     inner()
// }

// outer()


// function outer() {
//     var num = 5
//     function inner() {
//         // debugger
//         console.log(num)
//     }
//     num = 7
//     return inner
// }
// // outer()()
// var result = outer()
// result()


// function extraOuter() {
//     var a = 6;
//     return function outer() {
//         var b = 1
//         return function inner() {
//             // debugger
//             console.log(a, b)
//         }
//     }
// }

// extraOuter()()()