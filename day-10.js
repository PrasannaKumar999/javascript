// function copyArrayMultiplyBy2(array) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 2)
//     }
//     return output
// }

// console.log(copyArrayMultiplyBy2(arr))

// copyArrayAdd2(arr)

// function copyArrayMultiplyBy2(array) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] + 2)
//     }
//     return output
// }

// Dry principle is broken




// let arr = [1, 2, 3, 4]

// function copyArrayAndManipulate(array, instructions) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]))
//     }

//     return output
// }

// //instructions
// function multiplyBy2(input) {
//     return input * 2
// }
// function add2(input) {
//     return input + 2
// }

// console.log(copyArrayAndManipulate(arr, multiplyBy2))
// console.log(copyArrayAndManipulate(arr, add2))

// function sayHi() {
//     return function () {
//         console.log('second')
//         return function () {
//             console.log('third')
//         }
//     }
// }

// // calling it using a variable
// // const result = sayHi()
// // result()

// sayHi()()()

// var message = 'Hello Earth'
// const obj = {
//     message: 'Hello, World'
// }
// function print() {
//     console.log(this.message)
// }

// print() //
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()