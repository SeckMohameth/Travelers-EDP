

fetch('https://ecs.the-sock-exchange.com/api/data')
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Fetch attempt completed.'));

// const promise = new Promise((resolve, reject) => {
//     const successs = Math.random() > 0.5;

//     setTimeout(() => {
//         if(successs) {
//             resolve('Promise resolved successfully');
//         } else {
//             reject(new Error('Promise rejected with an error'))
//         }
//     }, 1000);
// });

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(`Error: ${error.message}`);
//     })