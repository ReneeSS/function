"use strict";

let num = 30;

function showFirstMassage(text){
  console.log(text)
  let num = 20;
}


showFirstMassage("Hello World!");
console.log(num);

function calc(a, b){
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(6, 7));
console.log(calc(3, 7));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function(){
  console.log("Hello World!!!");
};


const calculator = (a, b) => a + b;


const usdCurr = 39;
const euroCurr = 42

function convert(amount, curr){
  console.log(curr * amount)
}

convert(14700, usdCurr);
convert(1275, euroCurr); 


function test() {
  for(let i = 0; i < 5; i++){
    console.log(i);
    if(i === 3){
      return;
    }
  }
}

test();

function doNothing() {

};

console.log(doNothing() === undefined);
