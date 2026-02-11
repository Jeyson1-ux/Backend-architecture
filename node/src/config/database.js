import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

let connection = null; // Store the connection instance

const initializeConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306, // default to 3306
    });
    console.log('Database connected.');
  }
  return connection;
};

const getConnection = async () => {
  if (!connection) {
    await initializeConnection();
  }
  return connection;
};

const closeConnection = async () => {
  if (connection) {
    await connection.end();
    connection = null;
    console.log('Database connection closed.');
  }
};

const db = {
  initialize: initializeConnection,
  getConnection,
  close: closeConnection,
};

export default db;
