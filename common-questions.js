//======================================
//'Hello World'
//======================================
log('hello world') // 'hello world'

function log(inParam) {
 console.log(inParam);
}


//======================================
//'Handle arguments'
//======================================
log('hello', 'world', ...); // 'hello world'

function a() {
	console.log(Array.prototype.join.call(arguments, ', ') + ', ...');
}


//======================================
//'Reverse string'
//======================================
invert('hello') // "olleh"

function invert(inParam) {
    console.log(inParam.split('').reverse().join(''));
}


//======================================
//'Extend String Object'
//======================================
"hello".invert() // "olleh"

//v1
String.prototype.invert = function () {
	console.log(this.toString().split('').reverse().join(''));
}

//v2
String.prototype.invert = function () {
	console.log(String.prototype.split.call(this, '').reverse().join(''));
} // better!


//======================================
//'Bindig'
//======================================
var bindedFunc = widget.userClick.bind(widget);

someElement.onclick = bindedFunc;
//======================================
//'Closure'
//======================================
//v1:
for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log(i);
    }, i*1000 );
}

//v2:
function a(value) {
	return function() {
		console.log(value);
	}
}

for (var i = 0; i < 5; i++) {
  setTimeout(a(i), i * 1000);  // NOTE: Remove initially defined function!
}
//======================================
//'Inheritance'
//======================================
// Define the Person constructor
var Person = function(firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};

// Define the Student constructor
function Student(firstName, subject) {
  // Call the parent constructor, making sure (using call)
  // that "this" is set correctly during the call
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
}

// Create a Student.prototype object that inherits from Person.prototype.
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Person for the "firstName" 
// argument. The correct place to call Person is above, where we call 
// it from Student.
Student.prototype = Object.create(Person.prototype); // See note below

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;


// ======================================
// ES6
// ======================================
//arrow functions
//let keyword
//default values/functions for function in params
//const declarations (reference) - block scope
//shorthand properties a =3; s = 5; { a, s }
//spread operator ... for arrays is like cycling throught them
//string template '${variable}' can use expression inside
//var message = tag'It is ${param} I am ${another}'
//function tag(strings, ...values) { both are arryas}
//destructing assignment {color: asd} = {color: 1, a: 2}
//[a,,,,c] = [1, 23, 4, 5, 6]
//modules - import export we can import as allias
//Array.from() - convert to array array like objects
//promises can chain then should return something throwing error return failure
//generators function* yeild key word .next() to trigger can pas argument in next
//Map()
