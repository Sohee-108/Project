// 1.Use strict
'use strict';
//vanila.js 이용할 때 꼭 사용하기 놓치는 오류를 쉽게 잡아냄
console.log('Hello World!');


// 2.Variable (read/write)
// let (added in ES6) : 값 변경 가능 변수
let globalname = "global name";
{
let name = 'sohee';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalname);

}
console.log(globalname);
console.log(name);

// 3.Constants : 값 변경 불가능 변수 (read only)
const daysInWeek = 7;
const maxNumber = 5;

// 4.Variable types
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: typeof ${count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigint = 1214523529857329842345435423433423798434;
console.log(`value: ${bigint}, type: ${typeof bigint}`);
Number.MAX_SAFE_INTEGER;


// 5.Symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 6.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, tpye: ${typeof text}`);
text = 1;
console.log(`value: ${text}, tpye: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, tpye: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, tpye: ${typeof text}`);
 