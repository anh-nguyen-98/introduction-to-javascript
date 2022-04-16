# Loops and Subtoutines

## LOOPs

WHILE

```
let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}

```

DO WHILE

```
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

FOR

```
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

```
FOR ... IN

```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
for (let i in person) {
    console.log(i + ' = ' + person[i]);
}
```

FOR ... EACH

```
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```

2. What is the syntax for declaring a function in your language?
3. Are there any rules about where the function has to be placed in your code file so that it can run?
4. Does your language support recursive functions?
5. Can functions in your language accept multiple parameters? Can they be of different data types?
6. Can functions in your language return multiple values at the same time? How is that implemented?  If not, are there ways around that problem?  What are they?
7. Is your language pass-by reference or value? Check your code against outside sources in case there is anything tricky going on (like in Perl).
8. Are there any other aspects of functions in your language that aren't specifically asked about here, but that are important to know in order to write one? What are they?


References

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

