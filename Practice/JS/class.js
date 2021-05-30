'use strict';

// class: template
// object: instance of a class

 class Person{
     constructor(name,age){
         this.name=name;
         this.age=age;
     }

     speak(){
         console.log(`${this.name}: hello!`);
     }
 }

 const sohee = new Person('sohee',23);
 console.log(sohee);
 sohee.speak();

 // 1. Getter and setters
 class User{
    constructor(firstname,lastname, age1){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age1 = age1;
     }
     
     get age1() {
         return this._age1;
     }

     set age1(value){
         if (value < 0){
             throw Error('age can not be negative');
         }
         this._age1 = value;
     }
 }

 const user1 = new User('sohee', 'hi' , -1);
 console.log(user1.age1);


 