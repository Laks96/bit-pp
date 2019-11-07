/*1
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

var input = [2, 4, 7, 11, -2, 1];
var newArray = [];

for (var i = 0; i < input.length; i++) {
    newArray.push(input[i]);
    newArray.push(input[i]);
}


console.log(newArray);


/*2
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */


var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArray = [];
var sorted = input.sort();

console.log(sorted)


for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {

        sorted.splice



    }

}


console.log(sorted);











