# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection in an HTTP server leads to silent failures. The server does not respond appropriately to errors, causing unexpected behavior for the client. 

## Problem

The `bug.js` file contains a Node.js HTTP server that performs an asynchronous operation. If this operation fails (simulated with a random chance of error), the error is not properly handled, causing the server to silently continue without notifying the client.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections within the server. Using a `try...catch` block ensures that errors are caught and handled gracefully, providing a proper response to the client.   Additionally, using a process event listener ensures that uncaught errors outside of the request handling process are caught and the server shuts down gracefully.

## How to Reproduce

1. Clone this repository
2. Navigate to the repository directory
3. Run `node bug.js`
4. Make multiple requests to `http://localhost:3000`. You'll notice that sometimes the server will stop responding.
5. Run `node bugSolution.js`
6. Make requests to `http://localhost:3000`.  The server will now respond with an error message on failure.