"use strict";



/*1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function getMinAndMax(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i++]) {
            var min = numbers[i];
            var min = i;

        }

        for (j = 0; j < numbers.length; j++)
            if (numbers[j] > numbers[j++]) {
                var max = numbers[j];
                var max = j;
            }

    } var tmp = i;
    var max = tmp;
    var min = max;
    return numbers;

}

console.log(getMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]));

/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function newArray(numbers) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        var calc = numbers[i] / 2 + 5;

        if (calc === 0) {
            calc = 20;
        }

        transformed[i] = calc;
    }

    return transformed;

}

console.log(newArray([3, 500, -10, 149, 53, 414, 1, 19]));


3. /*Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/


