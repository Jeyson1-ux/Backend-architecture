import mysql from 'mysql2/promise'; // importera mysql2-paketet för att kunna använda MySQL-databasen


class DatabaseService { 

    constructor() {
        this.pool = null; // pool = en anslutningspool som hanterar flera databasanslutningar
    }

    async connect() {
        if (!this.pool) {
            this.pool = mysql.createPool({
                host: '127.0.0.1',
                user: 'nodeuser',
                password: 'Node123!',
                database: 'maria',
                port: 3307

            });
            console.log("Database connected successfully!")
        }
    }

    async query (sql, params = []) {
        if (!this.pool) {
            throw new Error('Database not connected. Call connect() first before continue.');
        }
        const [result] = await this.pool.execute(sql, params); // kör SQL-queryn med eventuella parametrar
        return result; // returnera resultatet av queryn tillsammans med fälten
        //query = en SQL-fråga som ska köras mot databasen
    }
}

export default new DatabaseService(); // exportera DatabaseService-klassen så att den kan användas i andra delar av applikationen