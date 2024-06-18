// synchronous function
function syncFunc() {
    console.log('This is a synchronous function');
}

async function asyncFunc() {
    // Simulate a delay using a promise and setTimeout
    const result = await new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve('This is an asynchronous function');
        }, 2000); // 2 seconds delay
    });
    console.log(result);
}

syncFunc()

asyncFunc()

console.log('End of script')


// Fetch data from an API using async/await
async function fetchData() {
    try {
        const response = await fetch('https://ecs.the-sock-exchange.com/api/socks/1/3');
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();