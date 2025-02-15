** connect to internet

# Bachelor's Recipe

A recipe-sharing platform where users can add new recipes, explore various categories based on countries, and share their favorite dishes.

## Features
- Add new recipes
- Explore recipes based on country categories
- Share recipes with others
- User-friendly interface

## Tech Stack
- **Frontend:** EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas account)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd bachelors-recipe
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=3000
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4. **Start the application:**
   ```sh
   npm start
   ```

   The server will run on **http://localhost:3000**

## Usage
- Open `http://localhost:3000` in your browser.
- Add, browse, and share recipes.

## Troubleshooting
- If you get a MongoDB connection error, check if MongoDB is running.
- Ensure you have set the correct `MONGODB_URI` in the `.env` file.
