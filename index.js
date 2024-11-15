import { myAccount } from './es6.js';
import './dom.js'; 
//core js

//variables

// const used since users are fixed.
const maxUsers = 100;

// let used since user count can change and cannot
// be redeclared.
let userCount = 0;

//var can be used globally and also reassigned
var discountRate = 0.1;


//primitive data types
let itemPrice = 19.99; // numbers can be decimal or whole

let score = 0;
score += 10;

let baseURL = "https://www.google.com/"; 

let isLoggedIn = true; 


let middleName = null; // null - when user didn't provide a middle name 
let lastAccessed; // undefined since no value is assigned yet


// object types
// array - can be used for storing a collection of data items

let products = ["Laptop", "Phone", "Tablet"];


//object - groups related data and methods 
let userProfile = {
    name: "ABC",
    age: 25,
    isActive: true,
    date:new Date()
};


// use case for conditional

async function fetchUserData(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
            throw new Error(`error , status code ${response.status}`);
        }
        const userData=await response.json();
        if(userData.id==1){
            console.log("hello id 1");
        }
        else{
            console.log("hello guest");
        }
        // ternary short hand for if-else
        let message=(userData.id==1)?"hello id 1":"helloguest";
        //if list of possible value then switch can be used
    }
    catch(error){
        console.log(error);
    }
}
// by using promise
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
           throw new Error(`error , status code ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  fetchData();
  

// loops

let items = ["Laptop", "Phone", "Tablet"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// for each value callback function will be called.
let values = ["Laptop", "Phone", "Tablet"];
values.forEach(product => console.log(product));

// for traversing each properties in object
let user = { name: "ABC", age: 25, isActive: true };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//function expression - function not hoisted
const isMinor=function(age,validAge=18){
    return age<validAge;
}

isMajor(user.age);
isMinor(user.age);

//function declaration 
//valid age is local scope
function isMajor(age,validAge=18){
    return age>=validAge;
}

// Object Prototype
function Employee(name){
    this.name=name;
}

Employee.prototype.greet=function(){
    console.log(`Hello, ${this.name}`);
}

const user1=new Employee("ab");
const user2=new Employee("bc");

function display(...users){
    users.forEach(user=>user.greet());
}

display(user1,user2);

//import 
myAccount.deposit(1000);
myAccount.checkBalance();