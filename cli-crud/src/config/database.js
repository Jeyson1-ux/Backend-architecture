import dotenv from 'dotenv'; // Load environment variables from .env file
dotenv.config(); // Access environment variables

export const config = {
    host: process.env.DB_HOST,//
    user: process.env.DB_USER, // Make sure to set this in your .env file
    password: process.env.DB_PASSWORD,// Make sure to set this in your .env file
    database: process.env.DB_NAME, // The name of your database
    port: process.env.DB_PORT, // Default MySQL port is 3306, but you can change it in the .env file if needed

}