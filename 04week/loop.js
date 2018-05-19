
//for loop to iterate the value of an array
const carsInReverse= ['Honda', 'Chevy', 'Acura', 'Toyota', 'Mazada','Subaru', 'Nissan', 'Ford'];
for(let i=0; i<carsInReverse.length; i++ ){
  console.log(carsInReverse[i]);
}

//for in loop to print each key of an object
let persons = {
 firstName : "Jane",
 lastNmae: "Doe",
 birthDate: "Jan 5, 1925",
 gender: "female"
};

//for in and if statement to print the value of the key birthDate in the object persons
for(property in persons){
console.log(persons[property]);
}

const findProperty = (key) => {
for(let lookup in persons) {
  if(lookup === key){
    console.log(persons[key]);
  }
}
}
findProperty("birthDate");

//WHile loop to print numbers to 1000
let num =0;
while(num<1000){
  console.log( num);
  num++;
}

//do while loop to print numbers to 1000
num=0;
do{
  console.log(num);
  num++
}while( num < 1000);

// When is a for loop better than a while loop?
//When the number of iterations is known, for loop is better

// How is the readability of the code affected?
//The start and ending value of the loop is visible at the top in the for loop.

// What is the difference between a for loop and a for...in loop?
//for loop works for a fixed number of iterations. for ...in is used to iterate through the properties of an object.

// What is the difference between a while loop and a do...while loop?
//In a while loop condition is checked first and the body id executed if it is true.
//In a do while loop the body is executed first and then the condition is checked. So it will execute at least once.
