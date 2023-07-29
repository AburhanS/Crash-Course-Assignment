
/* //alert("Hello World");
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning"); */



/* //var, let, const

let age=30;
age=31
console.log(age);

const age=30;
age=31;
console.log(age); */



/* //String, Numbers, Boolean, null, undefined

const name="John";
const age=30;
const rating=4.5;
const isCool=True;
const x=null;
const y=undefined;
let z;
console.log(typeof z); */



/* //Concatenation

const name="John";
const age=30;
console.log("My name is " + name + " and I am " + age);

//Template

console.log(`My name is ${name} and I am ${age}`);
const hello=`My name is ${name} and I am ${age}`;
console.log(hello); */



/* const s="Hello World!";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(""));

const s="technology, computers, it, code";
console.log(s.split(", ")); */



/* //Arrays - variables that hold multiple values

const numbers=new Array(1,2,3,4,5);
console.log(numbers);

const fruits=["apples", "oranges", "pears"];
fruits[3]="grapes";
fruits.push("mangos");
fruits.unshift("strawberry")
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray (fruits));
console.log(fruits.indexOf("oranges"));

const data=[1, "apples", true];
console.log(data); */



/* const person={
    firstName: "John",
    lastName: "Doe",
    age:30,
    hobbies:["music", "movies", "sports"],
    address:{
        street:"50 main st",
        city:"Boston",
        state:"MA"
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName} = person;
console.log(firstName);

const {firstName, lastName, address:{city}} =person;
console.log(city);

person.email="john@gmail.com";
console.log(person); */



/* const todos=[
    {
        id:1,
        text:"Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text:"Dentist appointment",
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON=JSON.stringify(todos);
console.log(todoJSON); */



/* // For

for(let i=0; i<10; i++){
    console.log(i);
    console.log(`For Loop Number ${i}`)
}


// While

let i=0;
while(i<10){
    console.log(`While Loop Number ${i}`);
    i++
} */



/* const todos=[
    {
        id:1,
        text:"Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text:"Dentist appointment",
        isCompleted: false
    }
];

for(let i=0; i<todos.length; i++){
    console.log(i);
    console.log(todos[i].text)
}
for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
    console.log(todo.id);
} */


/* 
// forEach, map, filter

const todos=[
    {
        id:1,
        text:"Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text:"Dentist appointment",
        isCompleted: false
    }
];

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText=todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
});
console.log(todoCompleted);


const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted); */



/* const x='10';

if(x==10){
    console.log("x is 10");
}

if(x===10){
    console.log("x is 10");
}

if(x==='10'){
    console.log("x is '10'");
}
 */


/* const x=20

if(x===10){
    console.log("x is 10");
}else{
    console.log("x is NOT 10");
}

if(x===10){
    console.log("x is 10");
}else if (x>10){
    console.log("x is greater than 10");
}else{
    console.log("x is less than 10");
} */


/* const x=5;
const y=10;

if(x>5 || y>10){
    console.log("x is more than 5 or y is more than 10");
}

if(x>4 || y>10){
    console.log("x is more than 4 or y is more than 10");
}

if(x>5 || y>9){
    console.log("x is more than 5 or y is more than 9");
}

if(x>5 && y>10){
    console.log("x is more than 5 and y is more than 10");
}

if(x>4 && y>10){
    console.log("x is more than 4 and y is more than 10");
}

if(x>5 && y>9){
    console.log("x is more than 5 and y is more than 9");
}

if(x>4 && y>9){
    console.log("x is more than 4 and y is more than 9");
} */



/* const x=11;
const color= x>10 ? "red" : "blue";
// ?=if   :=else

console.log(color);

switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue");
        break;
} */



/* function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums(5,4);
addNums(); */

/* function addNums(num1=1, num2=1){
    console.log(num1 + num2);
}
addNums(5,4);
addNums(); */

/* function addNums(num1=1, num2=1){
    return num1 + num2;
}
console.log(addNums(5,4));
console.log(addNums()); */

/* const addNums=(num1=1, num2=1)=>num1 + num2;
console.log(
    addNums(5,4),
    addNums()
); */

/* const addNums=num1=>num1+5
console.log(addNums(5)); */

/* const todos=[
    {
        id:1,
        text:"Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text:"Dentist appointment",
        isCompleted: false
    }
];

todos.forEach((todo)=>console.log(todo.text)); */



/* // Constructor

function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob= new Date(dob);
    /* this.getBirthYear= function() {
        return this.dob.getFullYear();
    }
    this.getFullName= function() {
        return `${this.firstName} ${this.lastName}`;
    } *//*
}

Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
} */


/* // Class

class Person{
    constructor(firstName, lastName, dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob= new Date(dob);
    }

    getBirthYear=function(){
        return this.dob.getFullYear();
    }

    getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}
} */


/* // Instantiate object

const person1= new Person("John", "Doe", "4-3-1980");
console.log(person1);
const person2= new Person("Mary", "Smith", "3-6-1970");
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName()); */



// Selectors

// Single element




// Multiple element