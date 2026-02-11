//Model: Manages data and business logic.

import DatabaseService from "../service/DatabaseService.js"; // Import the DatabaseService to interact with the database

class UsersModel {
    /** 
    @returns {Promise<Array>} Array of users // Returns a promise that resolves to an array of users
    */
    async getAllUsers() { // Fetch all users from the database, Fetch = Retrieve data from the database
        const query = "SELECT * FROM user"; // SQL query to select all users from the user table
        return await DatabaseService.query(query); // Execute the query and return the results

    }

    //Crud operation: Create
    /** 
    @param {String} name - Username
    @param {String} email - User email SocketAddress
    @param {String} password - User password
    @returns {Promise<number>} - Returns a Promise that resolves when the user is created
    */

    async addUser(name, email, password) { // Add a new user to the database
        const query = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";// SQL query to insert a new user into the user table, the ? are placeholders for the values that will be provided in the params array}
        const result = await DatabaseService.query(query, [name, email, password]); // Execute the query with the provided parameters
        return result.insertId; // Return the ID of the newly created user
    }

    // Crud operation: Update
    /** 
    @async // async is used to indicate that this function will perform asynchronous operations, such as database queries
    @param {number} id - User ID
    @param {string} name = new Username
    @param {string} email - update user email
    @param {string} password - update user password
    @returns {Promise<Boolean>} - Returns a Promise that resolves to true if the user was updated successfully, or false if the user was not found
    */
   
    async updateUser(id, name, email,password) { // Update an existing user in the database
        const query = "UPDATE user SET name = ?, email = ?, password = ?,updated = NOW() WHERE id = ?"; // SQL query to update a user in the user table, the ? are placeholders for the values that will be provided in the params arraynow()
        const result = await DatabaseService.query(query, [name, email, password, id]); // Execute the query with the provided parameters
        return result.affectedRows > 0; // Return true if at least one row was affected (updated), otherwise return false
    }

    /** 
        @param {number} id - User ID to delete
        @returns {Promise<Boolean>} True if the deletion was successful
    */

    async deleteUser(id) { // Delete a user from the database
        const query = "DELETE FROM user WHERE id = ?"; // SQL query to delete a user from the user table, the ? is a placeholder for the value that will be provided in the params array
        const result = await DatabaseService.query(query, [id]); // Execute the query with the provided parameter
        return result.affectedRows > 0; // Return true if at least one row was affected (deleted), otherwise return false
    }

    async searchForUsers(searchString) { // Search for users in the database based on a search string
        const query = "SELECT * FROM user WHERE username LIKE ? OR email LIKE ?"; // SQL query to search for users in the user table based on the name or email, 
        // the ? are placeholders for the values that will be provided in the params array
        const likeString = `%${searchString}%`; // % betyder att det kan finnas noll eller fler tecken före eller efter söksträngen, vilket gör att sökningen blir mer flexibel
        return await DatabaseService.query(query, [likeString, likeString]); // Execute the query with the provided parameters and return the results
    } //Like i sql = Används för att söka efter ett mönster i en kolumn, i det här fallet används det för att söka efter användare vars namn eller email innehåller söksträngen,
    //  % används som wildcard för att matcha noll eller fler tecken före eller efter söksträngen, vilket gör att sökningen blir mer flexibel.
}
export default new UsersModel(); // Export an instance of the UsersModel class for use in other parts of the application
