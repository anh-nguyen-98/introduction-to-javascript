// while
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
// do while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
// for
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

// for in -- iterate over property's name
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
for (let i in person) {
    console.log(i + ' = ' + person[i]);
}

// for of -- iterate over values
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

