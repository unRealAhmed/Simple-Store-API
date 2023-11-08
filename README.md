# Store API

The Store API is a Node.js and Express-based application designed for managing product information. It offers a set of endpoints to perform various operations related to products, such as creating, updating, deleting, and retrieving product details.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Features

- **Product Management:** Create, retrieve, update, and delete product information.
- **Query and Filtering:** Query products with filtering, sorting, and pagination options.
- **Validation:** Request and response data validation to ensure data integrity.
- **Error Handling:** Gracefully handle errors and return appropriate error responses.
- **MongoDB Database:** Data storage using MongoDB, a NoSQL database.

### Prerequisites

Before running the Store API, ensure you have the following prerequisites installed:

- Node.js
- MongoDB (with connection details configured in a `.env` file)

## API Endpoints

The Store API provides the following endpoints:

- **GET /api/v1/products**: Retrieve a list of products.
- **GET /api/v1/products/:id**: Retrieve details of a specific product.
- **POST /api/v1/products**: Create a new product.
- **PATCH /api/v1/products/:id**: Update a product by ID.
- **DELETE /api/v1/products/:id**: Delete a product by ID.

For detailed information about how to use these endpoints and the available query parameters, refer to the API documentation.

## Error Handling

The API implements error handling to provide clear and informative error responses. Error messages will help you identify and resolve issues during API usage.
