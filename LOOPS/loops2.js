/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes */

var a = [5, -4.2, 3, 7];
var e = 3;

for (i = 0; i < a.length; i++) {
    if (e === i) {
        console.log('yes');
    }
}

/* 2.Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var array = [-3, 11, 5, 3.4, -8];


for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i] = array[i] * 2

    }
}
console.log(array);



/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var index = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        index = i;
    }

}
console.log(min + ',' + index);
/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var prevmin = array[0];

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        prevmin = min
        min = array[i];


    }
}
console.log(prevmin);


