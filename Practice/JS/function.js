// 1. Function declaration
function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}

log('hello');
log(5);


// 2. Parameters
function changeName(obj){
    obj.name = 'coder';
}

const sohee = { name: 'sohee'};
changeName(sohee);
console.log(sohee);


// 3. Default parameters (added in ES6)
function shoeMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
shoeMessage('Hi');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for( let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }
}
printAll('sohee','prictice','project');


// 5. Local scope
let globalMessage = 'global'
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();


// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(isSecureContext.point <= 10){
        return;
    }
    // long upgrade logic
}






// 1. Funciton expression
const print = function(){
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. Callback function using function expression
function ramdomQuiz(answer,printYes,printNo){
    if (answer === 'love you'){
        printYes();}
        else{
            printNo();
        }
    }


const printYes = function() {
    console.log('yes!');
}

const printNo = function() {
    console.log('no!');
}

ramdomQuiz('wrong',printYes,printNo);
ramdomQuiz('love you',printYes,printNo);

const simplePrint1 = function(){
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add1 = function (a,b) {return a+b};
const add2 = (a,b) => a+b;


// IIFE: 함수를 만들면서 바로 호출
(function hello(){
    console.log('IIFE');
} )();