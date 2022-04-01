//---------Array:-----------------------

//var arr = [1,2,3,4];

//var arr = [1, 2, "hi", "bye", [4, 5, 6]];
//console.log(arr);
//console.log(arr[4][1]) //5
//console.log(arr[4].length)

//----------Array Methods----------

//1.push - adds elements to the End of the array; secondly,it return new length of array

// let arr =[1,2,3,4]
// console.log(arr);

// let result = arr.push(5,6,7,8)
//  arr.push([5,6,7])
//console.log(arr)
//console.log(result)//length of new array

//2.pop -deletes the last element from the array; secondly,it return the popped element
// let arr =[1,2,3,4]
//let result =arr.pop()
//console.log(arr,"after loop")
//

//Example
//let fruits = ["apple", "banana", "orange", "kiwi"];

// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.push("strawberry"));
// console.log(fruits.push("melon"));
// console.log(fruits);

//3.shift //remove element from front of the array

//console.log(fruits.shift()) //apple
//console.log(fruits)//banana,orange,kiwi

//4.unshift //add element from front of the array

//console.log(fruits.unshift()) //apple
//console.log(fruits)//apple,banana,orange,kiwi
// let result = fruits.unshift('first')
// console.log(fruits) //first, apple, banana, orange, kiwi
// console.log(result) //5

//5.indexof----
//returns the first index at which a given element occures

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'banana', 'jackfruit', 'cheeku', 'banana']
// let result = fruits.indexOf('banana')
// let result = fruits.indexOf('banana', 4)

// console.log(result)

//6.SLICE:-
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']
// let result = fruits.slice(1, 5) //ending index is NOT included
// let result = fruits.slice(4)
// let result = fruits.slice(-4)
// console.log(fruits, 'FRUITS')
// console.log(result, 'sliced fruits in result')

// example:-
// let fruits = ["apple", "banana", "orange", "kiwi", "melon", "tomato", "grapes"];

// console.log(fruits.push("strawberry", "papaya", "pear"));//10
// console.log(fruits.pop());//pear
// console.log(fruits.shift());//apple
// console.log(fruits.unshift("jackfruit"));//9
// let result = fruits.slice(0, 3);
// console.log(result);//jackfruit,banana,orange