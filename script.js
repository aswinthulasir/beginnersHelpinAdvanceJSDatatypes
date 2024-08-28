console.log("Hello world");
var a = 9;
console.log(a);

let b = 20; //block scopped variable execution (locally)
console.log(b);

{
  var a = 99;
  console.log(a);

  let b = 15;
  console.log(b);
}

console.log(a); //global execution
console.log(b);

console.log(typeof a);

let firstName = "Hrithik Roshan";

console.log(typeof firstName);

var Nota = true;
console.log(typeof Nota);

let Unknown;
console.log(typeof Unknown);

let stacking = null;
console.log(typeof stacking);

let arr = [1, 2, 3];
console.log(arr.length);

arr.push(15);
console.log(arr.length);

console.log(arr);

arr.pop(1);
console.log(arr);

//javascript objects

let person = {
  fName: "Hrithik",
  age: 20,
  gender: "female",
};

console.log(person.fName);

//object creation

let car = new Object(); //empty object

car.model = "Curvv.ev";
car.range = "400km";
console.log(car);

//array of objects

let obj = [
  {
    name: "Hanuman",
    age: "12",
  },
  {
    name: "Rahul",
    age: "14",
  },
];

console.log(obj[1].name);

let s = a + b;
console.log(s);

let t1 = 12;
let t2 = ++t1;

console.log(t2);

let p = 50;

if (t1 > p) {
  console.log("t1 is greater");
} else {
  console.log("p is greater");
}

// === datatype checking also

let r = 30;
let k = "30";

if (k === r) {
  console.log("Yes");
} else {
  console.log("No");
}

//else if

if (k === r) {
  console.log("Yes");
} else if (k > r) {
  console.log("k is greater");
} else {
  console.log("r is greater");
}

// functions (repeated calling/code reusability)

function addition(k,r) {
    var results=k+r;
    console.log('The added value is ' +results);



}
addition(20,30);

function subtraction(k,r) {
    var result=k-r;
    return result;



}
addition(20,30);

var sub=subtraction(128,18);
console.log('The result is '+sub);


//loops

for (let i = 0; i < 11; i++) {
    console.log(i)
    
}

for (let i = 0; i < 10; i++) {
    console.log(i+1)
    
}

for (let i = 0; i < 10; i++) {
    console.log(1+i)
    
}
for (let i = 0; i <= 10; i++) {
    console.log(i)
    
}

//for-in (for objects)

for (const key in car) {
    console.log(key)
}

for (const key in car) {
    console.log(car[key])
}

for (const item of arr) {
    console.log(item)
}

