// Import necessary modules and configure environment
require("dotenv").config({ path: "./config.env" });
const express = require('express');

// Create an Express application
const app = express();

// Middleware: Parse JSON in request body
app.use(express.json());


// Database Connection: Connect to the database
const connectDatabase = require("./utilities/dataBase");

connectDatabase();

// Error Handling Middleware: Handle requests for undefined routes

app.all("*", (req, _, next) => {
  // Create a custom error for 404 Not Found
  const err = new Error(`Can't Find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;
  err.isOperational = true;
  next(err);
});

// Error Controller: Handle errors generated during request processing
const errorController = require("./controllers.js/errorController");

app.use(errorController);

// Define the server's port
const port = process.env.PORT || 8000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
