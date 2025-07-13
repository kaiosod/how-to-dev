# JavaScript For NodeJS

This module will cover topics such as, arrow expressions, non-blocking I/O(Input/Output), the setInterval() function, and the setTimeout() function, and modules. If you are thinking to yourself, “wow, I’m not sure what these concepts are”, that’s ok. If you would like to learn more about a topic, click on the links throughout this article. Now, let’s get to our first topic—arrow expressions.

Arrow Expressions
With the introduction of ES6 (ECMAScript) in 2015 came a new feature called arrow expressions. Arrow expressions has allowed developers to omit parts of the function they don’t need. This means that it allows your code to become more maintainable and organized.

Let’s take a look at the code below. You will see two different functions defined. The first is anonymous (function is not named), and the second is named. When using an arrow expression, we do not use the function declaration. To define an arrow expression you simply use: () => { }. You can pass arguments to an arrow expression between the parenthesis (()).

```javascript

//Anoymous arrow expression

console.log(() => console.log('Shh'))

// Named function 

const helloWorld = (name) => {
    console.log(`Welcome ${name}`)
};

// Calling the helloWorld() function

helloWorld('Kaio');

```