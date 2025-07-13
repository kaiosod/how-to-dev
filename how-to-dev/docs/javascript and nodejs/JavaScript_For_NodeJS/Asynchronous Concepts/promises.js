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