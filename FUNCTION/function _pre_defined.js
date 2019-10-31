/*1.
Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */


function countVowels(string) {
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                result++;
        }
    }
    return result;
}
console.log(countVowels("AEae"));


/*2 Write a function that combines two arrays by alternatingly taking elements.*

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

function str(a, b) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        newArray += a[i] + b[i];

    } return newArray;
}



console.log(str(['a', 'b', 'c'], [1, 2, 3]));


/*Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function example() {

    var niz = [1, 2, 3, 4, 5, 6];
    var res1 = [];
    var res2 = [];

    for (i = 2; i < niz.length; i++) {
        res1 += niz[i];
    }

    for (i = 0; i < niz.length - 4; i++) {
        res2 = res1 += niz[i];
    }
    return res2;
}

var res = example();
console.log(res);






var res = (function () {

    var niz = [1, 2, 3, 4, 5, 6];
    var res1 = [];
    var res2 = [];

    for (i = 2; i < niz.length; i++) {
        res1 += niz[i];
    }

    for (i = 0; i < niz.length - 4; i++) {
        res2 = res1 += niz[i];
    }

    return res2;
})();

console.log(res);








