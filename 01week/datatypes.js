'use strict';

// write a Function to to display the current day and time
//define getDay() to get the currentday and defining getTime() to ge the time

// function to get the name of the day from index
function weekDay(index) {
  switch (index) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
  }
}

function currentDateTime() {
  const today = new Date(); // create the date object
  console.log(' today is ' + weekDay(today.getDay()) + ' Time : ' + today.getHours() + ':' + today.getMinutes()); // print the day and time
}
currentDateTime(); // function call

//Write a function to convert a number to a string

//define a const and assign the value
//declare a function that takes a number and display it as string. pass //the number as the parameter in the  function and return the value that is diaplayed as string. method to use here is Number.toString();
function num2Str(input) {
  const num = input;
  console.log(num.toString() + 1); // added 1 to check it converted the number to string. Expected 351 as the value passed is 35
  console.log(num + 1); // check to test the number. Expected 36.
}

num2Str(35);



// write a function to convert a string to a numberToString
function str2Num(input) {
  const n1 = input;
  console.log(Number(n1) + 1); // To check n1 converted to number from string. expected value 56.
  console.log(n1 + 1); // Check to test string. Expected 551.
}
str2Num('55');


// Write a functionto display different datatypes and prints out whether they are a:
//oolean
//typeof
function dataTypes() {
  console.log(typeof true);
  console.log(typeof null);
  console.log(typeof undefined);
  console.log(typeof 5);
  console.log(typeof NaN);
  console.log(typeof 'Hello');

}

dataTypes();

// Write a function to add 2 numbers

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

add(10, 20);

// Function to print when both conditions are true

function check(thing1, thing2) {
  if (thing1 && thing2) {
    console.log('Both the conditions are true!');
  } else {
    console.log('one of the condition is not true');
  }

}

check(true, true);

//Function to print when both conditions are true

function check1(thing1, thing2) {
  if (thing1 || thing2) {
    console.log('one of the condition is true!');
  } else {
    console.log('Both the conditions are not true');
  }

}

check1(true, false);

// Function to print when both conditions are not true

function check2(thing1, thing2) {
  if (!thing1 && !thing2) {
    console.log('Both the conditions are not true!');
  } else {
    console.log('one of the condition is true');
  }
}

check2(false, false);
