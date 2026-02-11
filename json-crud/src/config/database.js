import dotenv from 'dotenv';
dotenv.config();

export default {
    host: process.env.DB_HOST, // databasens host, t.ex. "localhost" eller "
    user: process.env.DB_USER, // databasens användarnamn
    password: process.env.DB_PASSWORD, // databasens lösenord
    database: process.env.DB_DATABASE
};