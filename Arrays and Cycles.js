/** Given an array consisting of movie names,
 *  iterate over the array with the output of the names
 *  of each movie to the console */
let arr = ['moovie1', 'moovie2', 'moovie3'];
arr.forEach(name => console.log(name));
/** Given an array of car manufacturers, convert
 *  the array to a string and back to an array*/
let arr1 = ['man1', 'man2', 'man3'];
let string1 = ''
for (let i = 0; i < arr1.length; i++) {
    string1 += arr1[i] + ','
};
let arr2 = string1.split(',');
arr2.pop();
/** Given an array of the names of your friends, add the words hello to each element of the array */
let arr3 = ['name1', 'name2', 'name3']
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = 'Hello, ' + arr3[i]
};
/**Convert numeric array to Boolean */
let arr4 = [1, 2, 5, 8, 9]
let arr5 = []
for (let i = 0; i < arr4.length; i++) {
    arr5[i] = false
  };
/** Sort the array [1,6,7,8,3,4,5,6] in descending order */
let arr6 = [1,6,7,8,3,4,5,6];
arr6.sort();
arr6.reverse();
/** Filter array [1,6,7,8,3,4,5,6] by value> 3*/
let arr7 = [1,6,7,8,3,4,5,6];
let arr8 = arr7.filter(value => value > 3);
/**Write a function that takes two parameters - an array and a number 
 * and outputs the index of an array element equal to a number */
let arr9 = [1,6,7,8,3,4,5,6];
let number = 6;
function takes(){
    for (let i = 0; i < arr9.length; i++ ){
            if (arr9[i] === number){
             console.log(i);
            }
        }
};
takes();
/**Implement a loop that will print the number 'a' until it is less than 10 */
for (let a = 0; a < 10; a++ ){
    console.log(a);
    };
/** Implement a loop that prints prime numbers to the console*/

let argument = 9
    for (let numbers = 0; numbers <= argument; numbers++) {
    let isPrime = true;
    if (numbers > 1) {
        for (let i = 2; i < numbers; i++) {
        if (numbers % i == 0) {
             isPrime = false;
             break;
            }
        }
        if (isPrime) {
        console.log(numbers);
        } 
    }
};
/**Implement a loop that prints odd numbers to the console */
let argument1 = 9
    for (let i = 0; i <= argument1; i++) {
        if(i % 2 != 0) {console.log(i)}
        };