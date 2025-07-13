# Asynchronous Concepts

When it comes to development in Node.js and JavaScript, we use a mix of synchronous code (blocking I/O), and asynchronous code (non-blocking I/O). A common example of asynchronous code are Promises.

## Promises

***A Promise is a JavaScript object that represents the eventual outcome of an asynchronous operation***. A Promise has three different outcomes: 

* Pending (the result is undefined and the expression is waiting for a result).
* Fulfilled (the promise has been completed successfully and returned a value).
* Rejected (the promise did not successfully complete, the result is an error object).

In the code below a new Promise is being defined and is passed a function that takes two arguments, a fulfilled condition, and a rejected condition. We then log the returned value of the Promise to the console and chain a .catch() method to handle errors.

```javascript
// Creating a promise

const testeLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.5){
        resolve('Lucky winner!')
    } else {
        reject(new Error('Unlucky!'))
    }
    
});

testeLuck.then(message => {
    console.log(message) // Log the resolved value of the Promise
}).catch(error => {
    console.error(error) // Log the rejected error of the Promise
});

```