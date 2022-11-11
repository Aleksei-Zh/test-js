/**
 * Perform addition of various types (string + boolean, string + number, number + boolean)
 * Perform multiplication of various types (string * boolean, string * number, number * boolean)
 * Divide different types (string / boolean, string / number, number / Boolean)
 * Perform explicit conversion (number, string, boolean) 
 */
 let a = '5';
 let b = true;
 let c = 5;
 let d = 'i am a string';
/** Perform addition of various types */
/** string + boolean */
console.log('string + boolean =', d + b);
console.log('string + boolean =', +a + b);
/** string + number */
console.log('string + number = ', d + c);
console.log('string + number = ', +a + c);
/** number + boolean */
console.log('number + boolean = ', c + b);
/** Perform multiplication of various types  */
/** string * boolean */
console.log('string * boolean =', a * b);
console.log('string * boolean =', d * b);
/** string * number */
console.log('string * number =', a * c);
console.log('string * number =', d * c);
/** number * boolean */
console.log('number * boolean =', c * b);
/** Divide different types */
/** string / boolean */
console.log('string / boolean =', a / b);
console.log('string / boolean =', d / b);
/** string / number */
console.log('string / number =', a / c);
console.log('string / number =', d / c);
/** number / Boolean */
console.log('number / Boolean=', c / b);
/** Perform explicit conversion */
/** number */
console.log('explicit number=', Number(c));
/** string */
console.log('explicit string =', Number(a));
/** string */
console.log('explicit string =', Number(d));
/** boolean */
console.log('explicit boolean =', Number(b));