/** Given the string 'ahb acb aeb aeeb adcb axeb'. 
 * Write a regular expression that matches the strings ahb, acb, aeb by pattern: 
 * letter 'a', any character, letter 'b'*/
let str1 = 'ahb acb aeb aeeb adcb axeb';
let result1 = str1.match(/a(hb|cb|eb)/g);
let result2 = str1.match(/(ahb|acb|aeb)/g);
let result3 = str1.match(/(ah|ac|ae)b/g);
/**Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest  */
let str4 = '2 + 3 223 2223';
let str5 = str4.search('2 + 3');
 /** Get the day, month and year of the current date and output it to the console separately*/
 let now = new Date();
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());