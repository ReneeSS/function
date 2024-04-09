function sayHello(name) {
  console.log(`Привет, ${name}`);
}

sayHello("Антон");



function returnNeighboringNumbers(number) {
  const arr = [];

  arr.push(number - 1);
  arr.push(number);
  arr.push(number + 1);
  console.log(arr);
}

returnNeighboringNumbers(0);

// Task 03

function getMathResult(num1, num2) {
  let result = 0;
  let num3 = num1;
  if(num2 <= 0 || num2 == NaN){
    console.log(num1);
  } else{
    for(let i = 1; i <= num2; i++){
      result = result + num3;
      num3 = num3 + num1;
      if(i == num2){
        return result;
      }else {
        result = result + '---';
      }
    }
  }
};

console.log(getMathResult(5, 10));
