//Declaration       //Parameter
function demoFunction(myData) {

  console.log(myData);
}

//Assignment
demoFunction('gordon');
            //Argument


//Declaration
var myData = 'gordon'; //Assignment
 //Variable  //Value

 var gordon = {                   //object
  name: 'Gordon',                 //property
  city: 'San Francisco',          //property
  myMethod: function sayHi() {  //method
  console.log('Hi!');
  }
};

//If a property happens to be a function, it's called a method

gordon.myMethod(); //function call

console.log('Hello World!') // log is a method on the console object

// If you have data on an object, it's called a property

function demoFunction(){};

var experiment1 = demoFunction;
var experiment2 = demoFunction();

experiment1
// function demoFunction(){};
experiment2
// undefined

function demoFunctionThatReturnsAString() {
  return 'a string';
}
var experiment3 = demoFunctionThatReturnsAString;
var experiment4 = demoFunctionThatReturnsAString();

experiment3
// ƒ demoFunctionThatReturnsAString() {
//     return 'a string';
// }
experiment4
// 'a string'



function demoFunctionThatReturnsUndefined() {
  return undefined;
}
var experiment5 = demoFunctionThatReturnsUndefined;
var experiment6 = demoFunctionThatReturnsUndefined();
experiment5
// ƒ demoFunctionThatReturnsUndefined() {
//     return undefined;
// }
experiment6
// undefined


// var experiment1 = demoFunction;			==> demoFunction
// var experiment2 = demoFunction();			==> undefined
// var experiment3 = demoFunctionThatReturnsAString;	==> demoFunctionThatReturnsAString
// var experiment4 = demoFunctionThatReturnsAString();	==> 'a string'
// var experiment5 = demoFunctionThatReturnsUndefined;	==> demoFunctionThatReturnsUndefined
// var experiment6 = demoFunctionThatReturnsUndefined();==> undefined



function demoFunctionThatReturnsAString() {
  return 'a string';
}

function logThis(thing) {
  console.log(thing);
}


// Experiment 7
logThis(demoFunctionThatReturnsAString);
// ƒ demoFunctionThatReturnsAString() {
//   return 'a string';
// }

// Experiment 8
logThis(demoFunctionThatReturnsAString());
// a string

// key points:
// * returns inserts a value where the function was called.
// * Not using return is the same thing as having return undefined.

// Takes the UL element
var todoListUL = document.getElementById('todo-list-ul');

// Creates a new LI inside the UL element dynamically.
var testLi = document.createElement('li');
todoListUL.appendChild(testLi);