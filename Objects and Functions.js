/**Create a car object, add a color property to it with the value equals 'black'*/
let car = {
    color: 'black',
};
/** Change the color property of the car object to 'green'*/
car.color = 'green';
/**Add the power property to the car object, 
 * which is a function and displays the engine power to the console*/
car.power = function (){console.log('ENGINE')};
car.power ();
/**Pears and apples are accepted to the warehouse, write
 *  a function that returns the result of adding the number of accepted pears and apples */
let apples = 10;
let pears = 25;
function RES() {
    let sum = apples + pears
   return sum
};
let res = RES();
console.log(res);
/**-       Your name is saved in the payment terminal, write a function to define the name 
 * in the terminal (if you entered your name, then hello + name, if not, then there is no such name) */
let NAME = 'Alex';
let NAME1 = 'ddd';
function showM() {
    if (NAME1 === NAME) {
      text = 'Hello, ' + NAME;
    }
    else {
      text = 'there is no such name'
    }
    console.log(text);
  };
showM();
/**Write a function for calculating the type of argument and type output to the console */
let argument = 7;
function whattype (){
    console.log(typeof argument)
};
whattype ();
/**Write a function that determines whether a number is prime or not */

function primeYesNot (){
    if (typeof argument === 'number') {
    let isPrime = true;
    if (argument === 1) {
         console.log("1 is neither prime nor composite number.");
        }
    else if (argument > 1) {
        for (let i = 2; i < argument; i++) {
        if (argument % i == 0) {
             isPrime = false;
             break;
            }
        }
        if (isPrime) {
        console.log(`${argument} is a prime number`);
        } else {
        console.log(`${argument} is a not prime number`);
        }
    }
    }
    else {
        console.log('it is not a number')
    }
};
primeYesNot ();