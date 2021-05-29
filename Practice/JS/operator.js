// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);


// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;
const preDecrement = --counter;
const postDecrement = counter--;


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value : 첫번째 값이 맞는 값이되면 연산을 멈춤
console.log(`and: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null){
    nullableObject.something;
}

function check(){
    for (let i=0; i<10; i++){
        console.log('OTL');
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//example test
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false




