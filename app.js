//  (CH-NO #31 TO #34)

// Q#1
// var d = new Date();
// document.write(d);

// Q#2
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var a = new Date();
// var b = month[a.getMonth()];
// document.write("Current Month: " +b);

// Q#3
// var d = new Date();
// d = d.toString();
// var e = d.slice(0, 3);
// document.write("today is: " +e);

// Q#4
// var f = new Date();
// f = f.toString();
// var g = f.slice(0,3);
// if (g === "Sat" || g === "Sun"){
//     document.write("It's Fun Day")
// }else {
//     document.write("It's not a very fun day.");
// }

// Q#5
// var h = new Date();
// var i = h.getDate();
// if(i < 16){
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month")
// }

// Q#6
// var j = new Date();
// var f = j.getTime();
// var minutes = (f/60000);
// document.write("Current Date: "+j+ "<br />");
// document.write("Elapsed miliseconds since January 1, 1970: "+f+ "<br />");
// document.write("Elapsed minutes since January 1, 1970: "+minutes);

// Q#7
// var l = new Date();
// var r = l.getHours();
// if (r < 12){
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

// Q#8
// var laterDate = new Date(2020, 11, 31, 00, 00, 00, 00);
// document.write(laterDate);

// Q#9
// var date1 = new Date("06/18/2015");
// var date2 = new Date("01/19/2021");
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// document.write(Difference_In_Days+ " days have passed since 1st Ramadan, 2015"); 

// Q#10
// var dateOne = new Date("05/15/2015");
// var dateTwo = new Date("01/01/2015");
// var Difference_In_Time = dateOne.getTime() - dateTwo.getTime();
// var Difference_In_seconds = Difference_In_Time / (1000 * 60);
// document.write(Difference_In_seconds+ " seconds had passed since beginning of 2015");

// Q#13
// var dob = new Date(prompt("Enter your date of birth", "Jan 1, 1970"));
// var n = dob.getTime();
// var today = new Date();
// var o = today.getTime();
// var p = o - n;
// var age = Math.floor(p / (1000 * 60 * 60 * 24 * 30 * 12))
// document.write(age);

// Q#14
// var customerName = "Muhammad Muzammil AYUB"
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var q = new Date();
// var crrntMonth = month[q.getMonth()];
// var units = 410;
// var charges = 16;
// var surCharge = 350;
// var dueDate = units * charges;
// var gross = dueDate + surCharge;
// document.write("Customer Name: <b>" +customerName+ "</b>");
// document.write("<br>Month: <b>" +crrntMonth+ "</b>");
// document.write("<br>Number of Units: <b>" +units+ "</b>");
// document.write("<br>Charges per Unit: <b>" +charges+ "</b>");
// document.write("<br><br>Net Amount Payable (within due date): <b>" +dueDate+ "</b>");
// document.write("<br>Late payment surcharge: <b>" +surCharge+ "</b>");
// document.write("<br>Gross Amount Payable (after due date): <b>" +gross+ "</b>");



//  (CH-NO #35 TO #38)

// Q#1
// function date(){
//     var r = new Date();
//     document.write(r);
// }
// date();

// Q#2
//      function greeting(){
//     var fname = prompt("Enter Your First Name: ");
//     var lname = prompt("Enter Your Last Name: ");
//     alert("Welcome! " +fname+ " " +lname)
//      }
//     greeting();

// Q#3
// function add(){
//     var num1 = parseInt(prompt("Enter First Number: "));
//     var num2 = parseInt(prompt("Enter Second Number: "));
//     var sum = num1 + num2
//     alert("Sum of two numbers: " +sum);
// }
// add();

// Facing Issue With Question No 4

// Q#5
// function square(a){
//     alert(a * a);
// }
// square(4)

// Q#6

// function factorial(b) {
//     if (b === 0) {
//         return 1;

//     }

//     return b * factorial(b - 1);
// }
// alert(factorial(6));

// Q#7
// function counting(){
//     var num1 = parseInt(prompt("Enter Start Number: "));
//     var num2 = parseInt(prompt("Enter End Number: "));
//     for(i = num1; i<= num2; i++){
//         document.write(i+ "<br />");
//     }
// }
// counting();

// Q#8
// function hypotenuse() {
//     function square() {
//         var base = parseInt(prompt("Enter Base: "))
//         var perp = parseInt(prompt("Enter Perpendicular: "))
//         var result = Math.pow(base, 2) + Math.pow(perp, 2);
//     }
//     square();
//     var ans = Math.sqrt(result);
//     return ans;
// }
// alert(hypotenuse());

// Q#9
// function triangle(widht, height){
//     var area = widht * height;
//     return area;
// }
// alert("Area of triangle is: " +triangle(6, 8));

// Q#10
// function palindrome(str) {
//     var newStr = reverse.palindrome();
//     if (str == newStr) {
//         alert("it's a Palindrome.");
//     }else {
//         alert("not a Palindrome");
//     }
// }
// palindrome(CIVIC);

// Q#11
// function uppercase(str) {
//     var array1 = str.split(' ');
//     var newarray1 = [];

//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

// Q#12
// function longest(str){
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for(var x = 1 ; x < array1.length ; x++)
//     {
//       if(result.length < array1[x].length)
//       {
//       result = array1[x];
//       } 
//     }
//     return result;
// }
// alert(longest('Web development tutorial'))

// Q#13
// function find(str, letter) {
//     var count = 0;
//     for (var j = 0; j < str.length; j++) {
//         if (str.charAt(j) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }
// alert(find('Muhammad Muzammil Ayub', 'a'));

// Q#14
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//     alert("The circumfrence is " + y);
// }
// function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//     alert("The area is " + x);
// }
// calcCircumfrence(20);
// calcArea(10);



//  (CH-NO #38 TO #42)

// Q#01
// function power(a, b){
//     alert(Math.pow(a, b))
// }
// power(4, 2);

// Q#02

// function leap() {
//     var year = parseInt(prompt("Enter Year: "))
//     if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {
//         alert(year+ " is a <b>leap</b> year!")
//     } else{
//         alert(year+ " is not a <b>leap</b> year!")
//     }
// }
// leap()

// Q#03
// function triangle(a, b, c) {
//     function second() {
//         var s = (a + b + c) / 2
//         return s;
//     }
//     second();
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return area
// }
// var area1 = triangle(4, 2, 6);
// alert(area1)


// Q#05
// function myFunction() {
//     var str = "Hello world, Welcome to the universe.";
//     var n = str.indexOf("Welcome");
//     alert(n)
// }
// myFunction();

// Q#06
// function character() {
//     var string = "hello world";
//     var vowel = ["a", "e", "i", "o", "u"];
//     var i;
//     for (i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for (j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;
//                 secondLoop--;
//             }
//         }
//     }
//     alert(string)
// }
// character();


// Q#08
// var km = prompt("Please enter the distance between two cities in kilometers: ");
// function meters() {
//     var meter = km * 1000;
//     alert("The distance between two cities in meters is: " + meter);
// }
// function feets() {
//     var feet = km * 3280.84;
//     alert("The distance between two cities in feets is: " + feet);
// }
// function inches() {
//     var inch = km * 39370.08;
//     alert("The distance between two cities in inches is: " + inch);
// }
// function centimeters() {
//     var centimeter = km * 1000 * 100;
//     alert("The distance between two cities in centimeters is: " + centimeter);
// }
// meters()
// feets()
// inches()
// centimeters()

// // QUESTION 10:
// function withdrawal(){
//     var amount = prompt("Please Enter Amount for Withdrawal :");
//     var hundreds = amount / 100;
//     var fiftys = (amount % 100) / 50;
//     var tens = (((amount % 100) % 50) / 10)
//     var remaining = (((amount % 100) % 50) % 10)
//     alert("Required notes of 100 is : "+hundreds)
//     alert("Required notes of 50 is : "+fiftys)
//     alert("Required notes of 10 is : "+tens)
//     alert("Amount still remaining is : "+remaining)
// }
// withdrawal()
