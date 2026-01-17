//Chapter 17-20 (Q No 01)
//var Array = [[],[],[]];
//console.log(Array);


//Chapter 17-20 (Q No 02)
//var matrix =[
  //[0,1,2,3],
  //[1,0,1,2],
  //[2,1,0,1]
//]

//Chapter 17-20 (Q No 03)
//for(var i = 1; i <= 10; i++) {
  //console.log(i);
  
//}

//Chapter 17-20 (Q No 04)
//var number = 2;
//var length = 15;

//for (var i = 1; i <= length; i++) {
  //console.log(number + " x " + i + " = " + (number * i));
//}

//Chapter 17-20 (Q No 05)
//var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

//for (var i = 0; i < fruits.length; i++) {
  //  console.log(fruits[i]);
//}

//for (var i = 0; i < fruits.length; i++) {
  //  console.log("Element at index " + i + " is " + fruits[i]);
//}

//Chapter 17-20 ( Q No 06)

// a. Counting: 1 to 15

//var counting = "";
//for (var i = 1; i <= 15; i++) {
   // counting += i;
   // if (i < 15) {
   //     counting += ", ";
   // }
//}
//console.log("Counting: " + counting);

// b. Reverse counting: 10 to 1

//var reverseCounting = "";
//for (var i = 10; i >= 1; i--) {
//    reverseCounting += i;
//    if (i > 1) {
//        reverseCounting += ", ";
//    }
//}
//console.log("Reverse counting: " + reverseCounting);

// c. Even numbers: 0 to 20

//var evenNumbers = "";
//for (var i = 0; i <= 20; i += 2) {
   // evenNumbers += i;
   // if (i < 20) {
   //     evenNumbers += ", ";
   // }
//}
//console.log("Even: " + evenNumbers);

// d. Odd numbers: 1 to 19

//var oddNumbers = "";
//for (var i = 1; i < 20; i += 2) {
  //  oddNumbers += i;
   // if (i < 19) {
   //     oddNumbers += ", ";
  //  }
//}
//console.log("Odd: " + oddNumbers);

// e. Series with 'k': 2k to 20k

//var seriesK = "";
//for (var i = 2; i <= 20; i += 2) {
   // seriesK += i + "k";
   // if (i < 20) {
   //     seriesK += ", ";
  //  }
//}
//console.log("Series: " + seriesK);

//Chapter 17-20 (Q No 07)
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];

//var userInput = prompt("Enter the item you want to search:");


//var found = false;

//for (var i = 0; i < A.length; i++) {
  //  if (A[i] === userInput) {
    //    alert(userInput + " is available at index " + i + " in our bakery.");
      //  found = true;
       //break;
    //}
//}

//if (!found) {
  //  alert("We are sorry. " + userInput + " is not available in our bakery.");
//}

//Chapter 17-20 (Q No 08)
//var A = [24, 53, 78, 91, 12];

//var largest = A[0];

//for (var i = 1; i < A.length; i++) {
  //  if (A[i] > largest) {
    //    largest = A[i];
    //}
//}

//console.log("The largest number in the array is: " + largest);

//Chapter 17-20 (Q No 09)
//var A = [24, 53, 78, 91, 12];

//var smallest = A[0];

//for (var i = 1; i < A.length; i++) {
  //  if (A[i] < smallest) {
    //    smallest = A[i];
    //}
//}

//console.log("The smallest number in the array is: " + smallest);

//Chapter 17-20 (Q N0 10 )
// for (var i = 1; i <= 100; i++) {
   // if (i % 5 === 0) {
     //   console.log(i);
    //}
  //}