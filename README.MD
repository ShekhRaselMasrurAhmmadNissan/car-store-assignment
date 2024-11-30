# Car Store

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Dependencies](#dependencies)
-   [Installation](#installation)
-   [Usage Instructions](#usage-instructions)
-   [Contact](#contact)

---

## About

Car Store is a backend system that allows users to:

-   Add a new car
-   Update car information
-   Find cars by ID, category, or brand
-   Retrieve all cars
-   Delete cars from the collection
-   Place orders
-   Calculate total revenue from orders

---

## Features

-   Add, update, delete, and fetch cars from the collection
-   Search cars by category, brand, or other criteria
-   Order cars
-   Calculate revenue from orders

---

## Tech Stack

-   **Node.js**
-   **Express.js**
-   **TypeScript**
-   **MongoDB**
-   **Mongoose**

---

## Dependencies

-   **Zod**: Used for schema validation
-   **Cors**: Solves cross-platform issues

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ShekhRaselMasrurAhmmadNissan/car-store-assignment
    ```
2. Navigate to the project directory:
    ```bash
    cd car-store-assignment
    ```
3. Install Dependencies:
    ```bash
    npm i
    ```
4. Create env file:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```
    - Replace your_mongodb_connection_string with your actual MongoDB URI.
5. Start the development server:
    ```bash
    npm run start:dev
    ```
    `The server will start on http://localhost:5000.`

## Usage Instructions

### 1. Create a Car

-   **Endpoint**: `/api/cars`
-   **Method**: `POST`
-   **Link**: [Create a Car](https://car-store-assignment-lake.vercel.app/api/cars)  
    Allows users to add a car.

---

### 2. Get All Cars

-   **Endpoint**: `/api/cars`
-   **Method**: `GET`
-   **Link**: [Get All Cars](https://car-store-assignment-lake.vercel.app/api/cars)  
    Retrieves all cars from the database.

---

### 3. Search Cars by Query

-   **Endpoint**: `/api/cars?searchTerm=category`
-   **Method**: `GET`
-   **Example**: `/api/cars?brand=Toyota`
-   **Link**: [Search Cars](https://car-store-assignment-lake.vercel.app/api/cars?brand=Toyota)  
    Finds cars based on search queries like `brand`, `category`, etc.

---

### 4. Get a Specific Car

-   **Endpoint**: `/api/cars/:carsID`
-   **Method**: `GET`
-   **Example**: `/api/cars/674a9bae1a8751b90389f89b`
-   **Link**: [Get Specific Car](https://car-store-assignment-lake.vercel.app/api/cars/674a9bae1a8751b90389f89b)  
    Fetches a car by its unique ID.

---

### 5. Update a Specific Car

-   **Endpoint**: `/api/cars/:carsID`
-   **Method**: `PUT`
-   **Example**: `/api/cars/674a9bae1a8751b90389f89b`
-   **Link**: [Update Specific Car](https://car-store-assignment-lake.vercel.app/api/cars/674a9bae1a8751b90389f89b)  
    Updates car information by ID.

---

### 6. Delete a Specific Car

-   **Endpoint**: `/api/cars/:carsID`
-   **Method**: `DELETE`
-   **Example**: `/api/cars/674a9bae1a8751b90389f89b`
-   **Link**: [Delete Specific Car](https://car-store-assignment-lake.vercel.app/api/cars/674a9bae1a8751b90389f89b)  
    Deletes a car by ID.

---

### 7. Place an Order

-   **Endpoint**: `/api/orders`
-   **Method**: `POST`
-   **Link**: [Place an Order](https://car-store-assignment-lake.vercel.app/api/orders)  
    Adds a new order.

---

### 8. Calculate Revenue

-   **Endpoint**: `/api/orders/revenue`
-   **Method**: `GET`
-   **Link**: [Calculate Revenue](https://car-store-assignment-lake.vercel.app/api/orders/revenue)  
    Calculates total revenue from the orders collection.

---

## Contact

-   **Author**: Shekh Rasel Masrur Ahmmad
-   **Email**: [shekhraselmasrurahmmadnissan@gmail.com](mailto:shekhraselmasrurahmmadnissan@gmail.com)

---

_Made with ❤️ by Shekh Rasel Masrur Ahmmad_
