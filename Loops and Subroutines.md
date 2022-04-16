# Loops and Subtoutines

## LOOPs

- `while`

```
let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}

```

- `do...while...`

```
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

- `for`

```
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

```

- `for ... in`

```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
for (let i in person) {
    console.log(i + ' = ' + person[i]);
}
```

- `for ...of`

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

## Functions

- A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
    - The name of the function.
    - A list of parameters to the function, enclosed in parentheses and separated by commas.
    - The JavaScript statements that define the function, enclosed in curly brackets, {...}.

For example
```
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));
```


- Functions can be written outside an object, like Python.
- JavaScript supports recursive functions

```
function factorial (n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(1));
```

- JavaScript accepts multiple parameters. They can be of different data types.

```
function multiply(a, b) {
    return a * b;
}
```
- JavaScript doesn't support functions that return multiple values.
- To work around, we can wrap multiple values into an array or an object and return the array or the object. Use destructuring assignment syntax to unpack values from the array, or properties from objects.

## Pass by value
JavaScript passes by value.

For objects:

```
const a = [3, 2, 1];

function test (a){
    a = [5, 2, 4];
}


test(a);
console.log(a);

```

For primitive values:

```
function test2(a) {
    a = 5;

}

const x = 7;
test2(x)
console.log (x);
```

8. Are there any other aspects of functions in your language that aren't specifically asked about here, but that are important to know in order to write one? What are they?


References

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

