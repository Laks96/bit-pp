/*Write a program that calculates the maximum of two given numbers. */

function first(a, b) {
    var sum = a + b;
    return sum;
}


var result = first(2, 3)
console.log(result);

/*2Write a program that checks if a given number is odd.*/

function second(a) {
    if (a % 2 !== 0) {
        var odd = a + ' is odd'
    }

    else { var odd = a + ' is even' }
    return odd;
}

var result = second(4);
console.log(result)

/*3Write a program that checks if a given number is a three digit long number.*/

function third(a) {
    if (a > 99 && a < 1000) {
        var number = a + " is three digit long";
        return number;
    }

    else {
        var number_second = a + "is not three digit";
        return number_second;
    }

}
var result = third(1024);
console.log(result)


/*4Write a program that calculates an arithmetic mean of four numbers.*/

function fourth(a, b, c, d) {
    var sum = (a + b + c + d) / 4;
    return sum;
}
var result = fourth(2, 4, 6, 8);
console.log(result);


/*5 Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
* * * * *
*       *
*       *
*       *
* * * * * /

function fifth() {

}

/*6 Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:*/




/*7 Write a program that calculates a number of digits of a given number. */

function seventh(a) {
    var digit = ('' + a).length
    return digit;
}
var result = seventh(10000)
console.log(result)


/*8 Write a program that calculates a number of appearances of a given number in a given array.*/

function eight(a, e) {
    var a = [2, 4, 7, 8, 7, 7, 1];
    var e = 7;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            var number = a[i] + number;
        }
    }
    console.log(sum)

