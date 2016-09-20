/* globals console */

var Person = (function () {

    //similar to constructor
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }

    //similar to methods
    Person.prototype.birthday = function () {
        this._age++;
    };


    //getter for age
    Person.prototype.getAge = function () {
        return this._age;
    };

    //setter for age
    Person.prototype.setAge = function (newAge) {
        //insert defensive programming validations
        this._age = newAge;
    };


    Person.prototype.toString = function () {
        return 'Name: ' + this._name + '; Age: ' + this.getAge();
    };

    ////alternative getter and setter
    //Person.prototype.age = function (newAge) {
    //    if (newAge) {
    //        //insert defensive programming validations
    //        this._age = newAge;
    //        return this; //for chaining
    //    } else {
    //        return this._age;
    //    }
    //};



    return Person;
}());


var Student = (function () {
    function Student(name, age, grade) {
        Person.call(this, name, age); //similar to :base in C#
        this._grade = grade;
    }

    //thats how inheritance works in JS
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    //overriding the parent's toString() method
    Student.prototype.toString = function () {
        return Person.prototype.toString.call(this) + '; Grade: ' + this._grade;
    };

    return Student;
}());

var st = new Student('Kris', 18, 12);
console.log(st.toString());



//-------------------------------------------------------------------------------------------------------------------

//example validation:

/*globals define*/
define(function () {
    'use strict';
    var Furniture;
    Furniture = (function () {
        function isValidManufacturer(manufacturer) {
            if (typeof manufacturer === 'string') {
                return true;
            }
            else {
                return false;
            }
        }
        
        function isValidPrice(price) {
            if (isNaN(price)) {
                return false;
            }
            else {
                return true;
            }
        }
 
        function Furniture(manufacturer, price, legs, height) {
            if (!(isValidManufacturer(manufacturer))) {
                throw new Error("Manufacturer must be string");
            }
            if (!(isValidPrice(price))) {
                throw new Error("Price must be number");
            }
            this._manufacturer = manufacturer;
            this._price = price;
            this._legs = legs;
            this._height = height;
        }
 
        return Furniture;
    }());
    return Furniture;
});
