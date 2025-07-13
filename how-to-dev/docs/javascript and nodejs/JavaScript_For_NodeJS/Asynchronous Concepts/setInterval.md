# SetInterval()

The setInterval() function executes a code block at a specified interval, in milliseconds. The setInterval() function requires two arguments: the name of the function (the code block that will be executed), and the number of milliseconds (how often the function will be executed). Optionally, we can pass additional arguments which will be supplied as parameters for the function that will be executed by setInterval(). The setInterval() function will continue to execute until the clearInterval() function is called or the node process is exited. In the code block below, the setInterval() function in the showAlert() function will display an alert box every 5000 milliseconds.

```javascript
// Defining a function that instantiates setInterval
const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    setInterval(() => {
      alert('I show every 5 seconds!')
    }, 5000);
  };
  
  // Calling the newInterval() function that calls the setInterval
  showAlert();
```