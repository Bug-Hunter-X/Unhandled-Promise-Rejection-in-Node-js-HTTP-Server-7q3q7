const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Error handling missing!  The server silently fails
    console.error('Error:', error); //This will not be displayed by the server, unless it is logged somewhere else
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a network error or other issue
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Simulated network error'));
      } else {
        resolve();
      }
    }, 1000);
  });
}