//Manages all db interactions, including connecting to the database and executing queries.

import mysql from "mysql2/promise";
import { config } from "../config/database.js";

class DatabaseService {
    #connection = null; // Private property to hold the database connection

    async connect() { // Establish a connection to the database
        try {
            this.#connection = await mysql.createConnection(config); // Use the configuration from the config file
            console.log("You have successfully connected to the database!");   
        } catch (error) {
            console.error("Failed to connect to the database:", error);

        }
        process.on("SIGINT", () => this.closeConnection()); // Handle graceful shutdown on Ctrl+C, sigint is the signal sent when you press Ctrl+C in the terminal
        process.on("SIGTERM", ()=> this.closeConnection()); // Handle graceful shutdown on termination signal, sigterm is the signal sent when the process is terminated
    }

    async query(sql, params = []) { // Execute a SQL query with optional parameters
        try {
            const [rows] = await this.#connection.execute(sql, params); // Execute the query and return the results
            return rows;
        } catch (error) {
            throw new Error(`Database error: ${error.message}`); // Throw an error if the query fails
        }

    }

    async closeConnection() { // Close the database connection gracefully
        if (this.#connection) {
            await this.#connection.end(); // End the connection 
            console.log("The Databaase connection has been closed.")
        }

    }
}

export default new DatabaseService(); // Export an instance of the DatabaseService class for use in other parts of the application