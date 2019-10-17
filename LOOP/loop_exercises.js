/* Wwrite a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/
var i = 0;

while ((i % 2 === 0 || i % 0 === 1) && (i < 15))
 {
    console.log(i);
    i++;
    
    
}

for (var x=1; x<=15; x++) {
   
    
    if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}



/*2.Write a program to sum the multiples of 3 and 5 under 1000.*/

//Write a program to compute the sum and product of an array of integers.

//Write a program that outputs the sum of squares of the first 20 numbers. 

var x = 1;
var result = ''


for (x = 1; x >= 20; x++) {
      result = x * x;
      console.log(result);
}
//Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks = Avgmarks +  students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}



/*Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/
var i = 0;
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var final = 0;

for (i=0; i <= a.length; i++);
 {
    final = a[0] + a[1] + a[2];
    console.log (final);
}







        
