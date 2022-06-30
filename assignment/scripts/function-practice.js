console.log('***** Function Practice *****')
let str = "\n";
// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('Problem #1:');
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log(str);

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('Problem #2:');
function helloName( name ) {
  return `Hello ${name}!`
};
// Remember to call the function to test
console.log(helloName('Kas'));
console.log(str);

// 3. Function to add two numbers together & return the result
console.log('Problem #3:');
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
};
console.log(addNumbers(2,20));
console.log(str);
// 4. Function to multiply three numbers & return the result
console.log('Problem #4:');
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3;
};

console.log(multiplyThree(1,2,4));
console.log(str);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('Problem #5:');
function isPositive( number ) {
  if ( number > 0 ){
    console.log(`isPositive - should say true, ${number} -- true`);
    return true;
  }
    console.log(`isPositive - should say false, ${number} -- false`);
   return false;
};

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
// console.log( 'isPositive - should say true', isPositive(3) );
// console.log( 'isPositive - should say false', isPositive(0) );
// console.log( 'isPositive - should say false', isPositive(-3) );

isPositive(3);
isPositive(0);
isPositive(-3);
console.log(str);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('Problem #6:');
function getLast( array ) {
  if (array.length > 0){
    let lastItem = array.pop();
    return console.log(lastItem);
  } else {
    return console.log('undefined');
  }
}
getLast([1,2,3,4,5]); // 5
getLast([]); // undefined
console.log(str);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('Problem #7:');
function find( value, array ){
  for (let i = 0; i<array.length; i++){
    if (value === array[i]){
      console.log('true');
      return true;
    }
    }
    console.log('false');
    return false;
}
find(10, [1,2,3,4,5]); //should be false
find(4, [1,2,3,4,5]); //should be true


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('Problem #8:');
function isFirstLetter(letter, string) {
  if (letter == string[0]){
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(str);

// 9. Function to return the sum of all numbers in an array
console.log('Problem #9:');
function sumAll(array) {
  let sum = 0
  for (i = 0; i<array.length; i++){
    sum += array[i];
  }
  return console.log(sum);
};
sumAll([20,20,20,20,20]);
sumAll([20,-20,20,-20,-20]);
console.log(str);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('Problem #10:');
functionOne = (giveArrayHere) => {

  functionTwo = (num) => {
      for (let i=0; num > i; i++){
          if (num > 0){
              return true;
          }
      }
      return false;
  }
  console.log(giveArrayHere.filter(functionTwo));
}

functionOne([-4,-3,-2,-1,0,1,14,236,23])
console.log(str);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript

/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/
console.log('Problem #11:');
move = (position, roll) => {
  let newPosition = position + (roll * 2);
  return newPosition;
}

console.log(move(3,6)) // should be 15

