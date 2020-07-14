// //q1 chap1
// alert("Welcome");
// //q2chap1
// alert("Error! Please enter a Valid Password");
// //q3chap1
// alert("Welcome to JS Land...\nHappy Coding!");
// //q4chap1
// alert("Welcome to JS Land..");
// //q5chap1
// alert("Happy Coding!");

// //q6chap1
// alert("Hello.. i can run JS through my web browser's console  ");
// //q7chap1
// alert("Welcome to JS Land..");
// //q4chap1
// alert("Welcome to JS Land..");
// //-------------------------------------------------------------------------------
// //          Chapter 2
// //1
// var username;
// //2
// var myName;
// myName = "Ibad Saleem";
// //3
// var message;
// message = "Hello World";
// alert(message);
// //4
// var name = "Ibad Saleem";
// var age = 20;
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// //5
// var variable = "PIZZA"
// var str = "";
// for(var i = 5 ; i > 0 ; i--){
//     for(var j = 0 ; j < i ; j++){
//         str += variable[j];
//     }
//     str += "\n";
// }
// alert(str);


// //6
// var email = "xyz@gmail.com"
// alert("my email address is " + email);

// //7
// var book = "A smarter wway to learn Javascript";
// alert("I am trying to learn from book " + book );

// document.write("Yah! I can write HTML content through Javascript");



// //9
// var str1 = "------------o.().o------------"
// alert(str1);


// //----------------------------------------------------------------------------------
// //      Chapter 3

// //q1
// var age = 20;
// alert("I am "  + age + " year old");

// //q2
//     var visted = 14;
//     alert("you have visited " +visted + " times" );
    
// //q3
//     var birth = 2000;
//     alert("My birth year is "+ birth + "\nDAta type of my birth is a number" );
// //q4
//     var name = "John Doe";
//     var title = "T-Shirts";
//     var quantity = 5;
// document.getElementById("div1").innerHTML = "<p>" + "<b>" + name + "</b> ordered <b>" + quantity + title + "</b>(s)" + "on XYZ Clothing Store" + "</p>"
    
// //-----------------------------------------------------------
// //Chapter 4
// //1
// var a = 2, b = "Ibad", c = 2.34;
// //2
// var a = 1, b = 'a', c = 1, d = 2.3, e = 2;
// var a b = 1, b@=1, b$ = 2.1, B ^= 'k', 2A = 's';

// //3

// document.write("<h1> Rules For Naming JS Variables</h1>\n\n\n\n");
// document.write(" Variable names can only contain numbers, &, _  and -. For example $my_1stVariable\n");
// document.write(" Variables must begin with a letter, & or _. For example $name, _name or name\n");
// document.write(" Variable names are case sensitive");
// document.write(" Variable names should not be JS keywords");
//-------------------------------------------------
//Chapter 5

// var x = parseInt(prompt("enter first number"));
// 			var y = parseInt(prompt("enter second number"));

// 			var result = x + y;
// 			document.getElementById("displaybox").innerHTML = "SUM OF " + x + " " + y +" is " + result;
// 			result = x - y;
// 			document.getElementById("minus").innerHTML = "Diff OF " + x + " " + y +" is " + result;
// 			result = x * y;
// 			document.getElementById("multiplication").innerHTML = "product OF " + x + " " + y +" is " + result;
// 			result = x /y;
// 			document.getElementById("division").innerHTML = "divident OF " + x + " " + y +" is " + result;
// 			result = x %y;
// 			document.getElementById("mod").innerHTML = "remainder OF " + x + " " + y +" is " + result;
			
            
// 			var variable;
//             document.getElementById("newbox").innerHTML += "    \nValue after variale declaration is " + variable  + ";<br>" ;
            
// 			variable =5;
//             document.getElementById("newbox").innerHTML += "  \n      Value after initializing is " + variable + "<br>";
//             variable++;
//             document.getElementById("newbox").innerHTML += "    \n     Value after increment = " + variable + "<br>";
//             variable += 7;
//             document.getElementById("newbox").innerHTML += "      \n  Value after adding 7  is " + variable + "<br>";
//             variable--;
//             document.getElementById("newbox").innerHTML += "      \n  Value after decrement is : " + variable + "<br>";
//             variable = variable %3;
//             document.getElementById("newbox").innerHTML += "   \n     Remainder after dividing by 3 is " + variable + "<br>";
            
//             var x =600;
//             document.getElementById("q4").innerHTML += "<br>Cost to buy 5 ticket is: " + (x * 5) + "<br><br>";
            
//             for(var i = 1 ; i <= 10 ; i++){
//                 document.getElementById("table").innerHTML += "<br>" + "4 x " + i + " = " + (4 * i); 
//             }
            
//             var ctemp = 25;
            
//             document.getElementById("q6").innerHTML += ctemp + " degree celsius is " + ((ctemp* 1.8) + 32) + " Feh <br>";
//             var ftemp = 70;
            
//             document.getElementById("q6").innerHTML += ftemp + " Feh is " + ((ftemp - 32) * (5/9) ) + " degree celius";
            
            
//             var pitem1 = 650;
//             var pitem2 = 100;
//             var qitem1 = 3;
//             var qitem2 = 7;
//             var scharges = 100;
            
//            document.getElementById("q7").innerHTML += "7. <br> <p> Price of item1 = " + pitem1  + "</p>"
//            document.getElementById("q7").innerHTML += "<p> quanitity of item1 = " + qitem1  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> Price of item2 = " + pitem2  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> quanitity of item2 = " + qitem2  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> Shipping charges = " + scharges  + "</p>"
//             document.getElementById("q7").innerHTML += "<br>Total cost  = " + ((pitem1 * qitem1) + (pitem2 * qitem2) + scharges);
                
            
            
//             //question 8
//             var obtained = 804;
//             var totalmarks = 980;
//             document.getElementById("q8").innerHTML += "<p>Total Marks : " + totalmarks + "</p>"
//             document.getElementById("q8").innerHTML += "<p>Obtained marks : " + obtained + "</p>"
//             document.getElementById("q8").innerHTML += "<p>Percentage : " + (obtained/totalmarks)*100 + "</p>"
            
//             //q9
//             var dollars = 10;
//             var riyals = 25;
//             document.getElementById("q9").innerHTML += "<p>Total currecy in PKR : " + ((dollars * 104.80) + (riyals  * 28))    +   "</p>"
            
//             //q10
//             var num = 10;
//             num = ((num + 5) *10)/2;
//             document.getElementById("q10").innerHTML += "<p> RESULT : " +  num +   "</p>"
            
//             //q11
//             var cyear = 2016;
//             var byear =  1992;
//             var age = (cyear - byear);
//             document.getElementById("q11").innerHTML += "<p>They are either " + age +" or "+ (age -1) + " years old</p>" 
            
            
//             //q12
//             var radius = 20;
//             document.getElementById("q12").innerHTML += "<p>radius of a circle is " + radius + "</p>"
//             document.getElementById("q12").innerHTML += "<p>Circumference of a circle is " + (2 * 3.142 * radius) + "</p>"
//             document.getElementById("q12").innerHTML += "<p>Area of a circle is " + ( 3.142 * radius * radius) + "</p>"
                
//             //q13
//             var fsnack = "chocolate chip";
//             var age = 15;
//             var max_age = 65;
//             var estimate = 3;
//             var ndays = (max_age-age) * estimate;
//             document.getElementById("q13").innerHTML += "<p>Favourite snack : " + fsnack + "</p>";
//             document.getElementById("q13").innerHTML += "<p>Current age : " + age + "</p>";
//             document.getElementById("q13").innerHTML += "<p>Maximum age : " + max_age + "</p>";
//             document.getElementById("q13").innerHTML += "<p>snacks per day : " + estimate + "</p>";
//             document.getElementById("q13").innerHTML += "<p>You will need :"+  ndays +" " +fsnack + "to last you until the ripe old age of   " + max_age  +  "</p>";
            
            
                        
                        
                        
                        
			

// chapter 6-9 

//q1

// var a = 10;
// document.write("Result:" + "<br>" + "The value of a is: " + a);
// document.write("<br>" + "--------------------------------------------" + "<br>");
// document.write("<br>" + "The value of ++a is: " + ++a + "<br>");
// document.write( "Now the value of ++a is: " + a + "<br>");
// document.write("<br>" + "The value of ++a is: " + a++ + "<br>");
// document.write("Now the value of ++a is: " + a + "<br>");
// document.write("<br>" + "The value of --a is: " + --a + "<br>");
// document.write( "Now the value of a is: " + a + "<br>");
// document.write("<br>" + "The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

//q2
// var a = 2, b = 1, result = --a - --b + ++b + b--;
// document.write("<br>" + "The value of --a is: " + --a + "<br>");
// document.write( "The value of --a - --b + ++b is: " +( --a - --b + ++b) + "<br>");
// document.write("The value of--a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) + "<br>");

//q3

// var a = prompt("Enter Your Name", "Name");
// alert("Hello " + a);


//chapter 9-11

// q1
// var City = prompt("Enter City Name", "City");
// if (City === "Karachi")
// {
//     alert("Welcome to City of Lights");
//     }

//q2
//     var gender = prompt("Enter Gender", "Gender");
//     if (gender === "MALE")
//     {
//         alert("Good Morning Sir");
// }
        
// else if (gender === "Female")
//     {
//         alert("Good Morning Ma'am");
// }


//q3

// var tl = prompt("Enter Traffic Light Colour")
// if (tl === "Red") { 
//     alert("Must Stop");
// }
// else if (tl === "Yellow") {
//     alert("Ready to Move");
//  }
// else if (tl === "Green") {
//     alert("Move Now");
// }


//q4
// var rp = prompt("Enter Remaining Fuel")
// if (rp <= 0.25)
// {
//     alert("Please refill the fuel in your car")
// }

// Chapter 13-15
// //q1
// var students = [];
// //q2
// var students = ["Ibad", "Saleem"];
// //q3
// var nostudents = [1, 2];
// //q4
// var boolstd = [true, false]


//chapter 17-20

var arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < 10; i++)
{
    document.write(arrnum[i] + '<br>');    
}


