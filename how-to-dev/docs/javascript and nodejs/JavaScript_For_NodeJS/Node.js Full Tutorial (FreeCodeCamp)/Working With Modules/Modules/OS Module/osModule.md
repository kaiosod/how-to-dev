# The OS Module
When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the program is running. Before Node, this information could not be retrieved using JavaScript due to the language being confined to the browser. However, Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re able to get access to much of this information through the os core module.

Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to its methods. You can include the os module into your file by typing:

```js
const os = require('os');
```

With the os module saved to the os variable, you can call methods like:

- os.type() — to return the computer’s operating system.
- os.arch() — to return the operating system CPU architecture.
- os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
- os.homedir() — to return the current user’s home directory.
- os.hostname() — to return the hostname of the operating system.
- os.uptime() — to return the system uptime, in seconds.

Let’s take a look at an example:

```js
const os = require('os');

const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}
```


In the above example code, we first require the os module and store it in a variable, os. Below that, we have an object, local, that will hold some information about the user’s computer: the name of the home directory, the type of operating system, and the time since the computer was last rebooted.

```js
  {
    'Home Directory': '/Users/luca',
    'Operating System': 'Darwin',
    'Time since reboot': 86997
  }
```


When we run the program, the local object stores all the requested information:

- the user’s home directory — '/Users/luca',
- the operating system — 'Darwin' (Darwin is the underlying operating system of macOS.),
- and the time since the computer was last rebooted — 86997 seconds.


Feel free to try running some of the os module methods on your own computer to get more information about the hardware, OS, and network you’re on!

Note that in the exercises below, the os module will return information from the learning environment hosted by Codecademy, and not your local computer.