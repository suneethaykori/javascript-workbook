
//for loop to iterate the value of an array
const carsInReverse= ['Honda', 'Chevy', 'Acura', 'Toyota', 'Mazada','Subaru', 'Nissan', 'Ford'];
carsInReverse.forEach((item) => {
  console.log(item);
});

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
