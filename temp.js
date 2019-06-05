// 1. What is JavaScript?

// 2. What are the data types supported by JavaScript?
// #Undefined, Null, Boolean, String, Symbol, Number, Object

// 3. What is the difference between null & undefined?

// 4. hoisting

// 5. let, const
// 5a. // is valid and why?
// const obj = { a: 1, b: 2, c: 3};
// obj.a = 4;
// console.log(obj);

// 6. What is the difference between the operators ‘==‘ & ‘===‘?

// 7. What is the difference between arrow and traditional function
// 7a. const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : () => {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName())

// 8. Array methods
// 8a. map, filter
// 8b. immutable methods

// 9.JSON string format covert to Javascript object

// // closure is function with preserve data in it
// let obj = function() {
// 	let i = 0;

// 	return {
// 		setI(k) {
// 			i = k;
// 		}
// 		getI() {
// 			return i;
// 		}
// 	}
// }

// const addTo = function(passed) {
// 	const add = function(inner) {
// 		return passed + inner;
// 	}

// 	return add;
// }
// const addThree = new addTo(3);
// const addFour = new addTo(4);

// console.log(addThree(1));
// console.log(addFour(1));

// // javaScript call apply and bind
// const obj = {num: 2};
// const addToThis = function(a, b, c) {
// 	return this.num + a;
// }
// console.log(addToThis.call(obj, 1, 2, 3));
// const arry = [1, 2, 3];
// console.log(addToThis.apply(obj, arry));

// ####### #######//
// // simplyfy
// function isEvenNum(num) {
//   if (num % 2) {
//   	return false;
//   }
//   else {
//   	return true;
//   }
// }

// function isEvenNum(num) {
// 	return !(num % 2);
// }

// // Transform
// const obj = { a: 1, b: 2, c: 3};
// //const arry = [1, 2, 3];
// console.log(Object.values(obj));

// // what is the return value and why?
// const myObject = {
//   price: 20.99,
//   get_price: () => {
//     return this.price;
//   }
// };
// const customObject = Object.create(myObject);
// console.log(customObject.get_price())

// // Tricky questions
// const arry = [1, 2, 2, 3]
// [... new Set(arry)]

// console.log(1 < 2 < 3); // true
// console.log(1 > 2 > 3); // false

// // Object.freeze(profile);
// const profile = {
// 	name: 'ian'
// }
// profile.age = 34;
// console.log(profile);

// // why it is false
// console.log(NaN === NaN);

// //
// (function() {
// 	let a = b = 100;
// })();

// array destructuring
// const arry = [1, 2, 3];
// let [a, b] = arry;

// swap the value
// let a = 5;
// let b = 10;
// [a, b] = [b, a];

console.log(a);
console.log(b);

// console.log(b);
// console.log(a);

// ####### #######//
// What is NodeJs

// request and response

// middleware

// In NodeJs there is something called error-first callback
// const data = fs.readFile('app.txt', () => {
// 	if (err) {
// 		return;
// 	}
// 	return data;
// });

// Callback vs Promise

// event loop

// request method
