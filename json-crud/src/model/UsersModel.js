import DatabaseService from "../service/DatabaseService.js";

class UsersModel {
    async getAllUsers() {
        return await DatabaseService.query('SELECT * FROM users'); // hämta alla användare från databasen
    }

    async addUser(username, email, password) {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'; // SQL-query för att lägga till en ny användare
        const result = await DatabaseService.query(query, [username, email, password]); // kör queryn med användarens data
        return result.insertId; // returnera det nya användar-id:t
    }

    async updateUser(id, username, email, password) {
        const fields = [];
        const params = [];

        if (username !== undefined) {
            fields.push('username = ?');
            params.push(username);
        }

        if (email !== undefined) {
            fields.push('email = ?');
            params.push(email);
        }

        if (password !== undefined) {
            fields.push('password = ?');
            params.push(password);
        }

        if (fields.length === 0) return false; // ingen data att uppdatera
        const query = `UPDATE users SET ${fields.join(',')},updated_at = NOW() WHERE id = ?`; // SQL-query för att uppdatera en användare
        params.push(id); // lägg till användar-id:t som sista parameter

        const result = await DatabaseService.query(query, params); // kör queryn med användarens data
        return result.affectedRows > 0; // returnera true om en rad uppdaterades, annars false
    }

    async deleteUser(id) {
        const query = 'DELETE FROM users WHERE id = ?';// SQL-query för att radera en användare
        const result = await DatabaseService.query(query, [id]); // kör queryn med användar-id:t
        return result.affectedRows > 0; // returnera true om en rad raderades, annars false
    }

    async searchUsers(searchString) {
        const query = 'SELECT * FROM users WHERE username LIKE ? OR email LIKE ?'; // SQL-query för att söka efter användare baserat på söksträngen
        const likeString = `%${searchString}%`; // % = wildcard-tecken som matchar noll eller fler tecken, används för att skapa en 
        // söksträng som matchar alla användare vars namn eller e-post innehåller söksträngen
        return await DatabaseService.query(query, [likeString, likeString])
    }

    async getUserById(id) {
        const query = `SELECT * FROM users WHERE id = ?`; // SQL-query för att hämta en användare baserat på id
        const result = await DatabaseService.query(query, [id]); // kör queryn med användar-id:t
        //query = en SQL-fråga som används för att hämta en användare från databasen baserat på deras id.
        return result[0] || null; // returnera den första användaren i resultatet eller null om ingen användare hittades
    }

    

}

export default new UsersModel();


