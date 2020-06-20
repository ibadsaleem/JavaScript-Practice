//chapter 21-25 q1


// var fname = prompt("Enter First Name: ", "First Name");
// var lname = prompt("Enter Last Name: ", "Last Name");
// var fullname = fname.concat("" + lname);

// alert("Hello " + fullname);


//q2
// var mobile = prompt("Enter Your Favorite Mobile Model: " , "Model");
// document.write("My Favorite Phone Is: " + mobile);
// document.write("<br>String length: " + mobile.length);

//q3

// var a = "Pakistani";
// document.write(a.indexOf('n'));


//q4

// var a = "Hello World";
//     document.write(a.indexOf('l'));

//q5
// var a = "Pakistani";
// document.write(a[3]);

//q7
// var city = "Hyderabad";
// if (city === "Hyderabad")
// {
//     city = "Islamabad";
//     document.write(city);
// }

//q8

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var msg = message.replace(/and/g, "&");
// document.write(msg);


//q9
// var snum = "472";
// var num = Number(snum);
// document.write("<b>"+ "Number: " + snum + "<br>Type: " + typeof(snum));
// document.write("<br>Number: " + num + "<br>Type: " + typeof (num)+ "</b>");

// //q10
// var b = "peanuts";
// document.write(b.toUpperCase());

//q11
// var a = "javascript";
// document.write(a[0].toUpperCase() + a.slice(1) );
//q12
// var fnum = 35.67*100;
// var ssnum = String(fnum);
// ssnum.slice(2);
// document.write(ssnum);


//q13


// var count=0;
// while (1) {
//     var username = prompt('Enter User Name: ', 'User Name');
//     for (var i = 0; i < username.length; i++) {
//         if (Number(username.charCodeAt(i) == 64 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 33))
//             {
//                 count++;
//             }
        
//     }
//         if (count == 0) {
//             alert("Hello " + username);

//         }
//         else {
//             alert("Kindly Enter Correct Username");
//             continue;
//         }
    
    
// }
//q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// while (1) {
//     var choice = prompt("Enter Item To Search: ", "Enter Item");

//     for (var i = 0; i < A.length; i++) {
//         if (choice.toLowerCase() === A[i] ) {
//             // alert("Item Available");
//             count = 1;
//             break;
//         }
//         else {
//             count = 0;
            
//         }
//     }
//     if (count == 0)
//     {
//         alert("Item Not Available");
//     }
//     else {
//         alert("Item Available");
//     }

// }

//q15
// var count = 1;

    
//     var password = prompt("Enter Password: ");
//     for (var i = 0; i < password.length; i++) {
//         if (password.length > 5) {
//             if (Number(password[0]) >= 48 && Number(password[0]) <= 56) {
            
//                 count = -1;
//                 break;
//             }
//             break;
//         }
//         else {
//             count = -2;
//             break;
//         }
//     }

//     if (count == -2)
//     {
//         alert("Password should be of atleast 6 characters");
//     }

//    else if (count == -1)
//     {
//         alert("Password should not begin with a number");
//     }
//     else if (count == password.length+1)
//     {
//         alert("Password should be alphanumeric")
//     }

//     else {
//         alert("Correct Password");
//     }

    




//q16
// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++)
// {
//     document.write(university[i] + "<br>"); 
// }

//q17
// var name = prompt("Enter Name: ", "Name");
// var a = name.length;
// document.write(name[a - 1]);





//q18

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < string.length; i++)
// {
//     if (string[i].toLowerCase()=='t' && string[i+1].toLowerCase()=='h' && string[i+2].toLowerCase()=='e')    
//     {
//         count++;
//     }
// }

// document.write(count);


//-----------------------------------------------------------------------------



/*
    Chapter 26-30
 */

 //Q1

// var a = +prompt("Enter Positive integer Number: ", "integer number");
// document.write("Number: " + a + "<br>");
// document.write("Round off Number: " + Math.round(a) + "<br>" );
// document.write("Ceil Value: " + Math.ceil(a) + "<br>" );
// document.write("Floor Value: " + Math.floor(a) + "<br>");


//Q2
// var b = +prompt("Enter Negative Floating Number: ", " number");
// document.write("Number: " + b + "<br>");
// document.write("Round off Number: " + Math.round(b) + "<br>" );
// document.write("Ceil Value: " + Math.ceil(b) + "<br>" );
// document.write("Floor Value: " + Math.floor(b) + "<br>");

//Q3
// var c = +prompt("Enter Number: ", " number");
// document.write("Number: " + c + "<br>");
// document.write("Absolute Number: " + Math.abs(c) + "<br>");

//Q4


// var e = Math.floor(Math.random() * 6) + 1;
// document.write("Random Dice Value: " + e);

//Q5

// var e = Math.floor(Math.random() * 2) + 1;
// document.write(e);
// if (e === 2)
// {
//     document.write("<br>Random Coin Value: " + "Heads");   
// }
// else if (e === 1)
// {
//     document.write("<br>Random Coin Value: " + "Tails");   
// }

// else {
//     document.write("Undefined");
// }


//Q6

// var e = Math.floor(Math.random() * 100) + 1;
// document.write("Random Value between 1 and 100: " + e);

//Q7

// var Weight = +prompt("Enter Weight: ", "Weight Kg");
// document.write("Weight: " + Weight + " kgs");

//Q8

// while (1) {
//     var rand = Math.floor(Math.random() * 10) + 1;
//     var pred = +prompt("Enter Number: ", "Number");
//     if (pred === rand) {
//         alert("Congratulations You Are Correct!");
//         break;
//     }
//     else {
//         alert("Try Again!");
//     }
// }

/* 
    Chapter 31-34
*/
//Q1

// document.write(Date());

//Q2
//Q3
// var day = new Date();
// var dy = day.getDay();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// document.write(weekday[dy].slice(0,3));

//Q4
// var day = new Date();
// var dy = day.getDay();
// if (dy === 5 || dy === 6)
// {
//     document.write("Its a fun day");
// }

//Q5

// var day = new Date();
// var dt = day.getDate();

// if (dt <= 15)
// {
//     document.write("First 15 days of the month");
// }
// else 
// {
//     document.write("Last days of the month");
// }

/*
Chapter 35-38

*/

//q1

// function date()
// {
//     var d = new Date();
//     return d;
// }


// document.write(date());



//q2

// function fullName() {
//     var fname = prompt("Enter First Name: ", "First Name");
//     var lname = prompt("Enter Last Name: ", "Last Name");
//     var fullname = fname.concat(" ", lname);
//     return fullname;
// }

// alert("Hello " + fullName());


//q3

// function sum()
// {
//     var num1 = +prompt("Enter Num 1 : ", "Num 1");
//     var num2 = +prompt("Enter Num 2 : ", "Num 2");
//     return (num1 + num2);
// }


// alert("Sum: " + sum());


//q4

// function calculate( Num1,  Num2,  operator)
// {
//     if (operator === '+')
//     {
//         return (Num1 + Num2);
//     }

//     else if (operator === '-')
//     {
//         return (Num1 - Num2);
//     }
        
//     else if (operator === '*')
//     {
//         return (Num1 * Num2);
//     }
        
//     else if (operator === '/')
//     {
//         return (Num1 / Num2);
//     }

//     else
//     {
//         alert("Wrong Option");
//     }
// }
// var num1 = +prompt("Enter Num 1 : ", "Num 1");
// var num2 = +prompt("Enter Num 2 : ", "Num 2");
// var op = prompt("Enter Operator : ", "sign");
// var c=calculate(num1, num2, op);
// alert("Answer: " + c);


//q5

// function square(a)
// {
//     return a * a;
// }

// var num = prompt('Enter Number: ', "Num");
// alert("Answer: " + square(num));


//q6

// function factorial(num)
// {
//     if (num === 1 || num===0)
//         return 1;
//     else if (num < 0)
//        return -1 
//     else {
//         return (num * factorial(num - 1));
//     }
    
// }

// var num = +prompt("Enter Number");
// alert("Factorial: " + factorial(num));


//q7

