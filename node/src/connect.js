import mysql from 'mysql2/promise';

async function main() {
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'nodeuser',
            password: 'Node123!',
            database: 'maria',
            port: 3307,
        });

        console.log('Connected'); // Connection succeeded

        // Run a query (optional)
        const [results, fields] = await connection.query(
            'SELECT * FROM `user` WHERE `username` = ?', 
            ['kylian'] 
        );

        console.log(results); // Show query results
        // console.log(fields); // Optional metadata

        await connection.end(); // Close connection
        console.log('Connection closed'); // Confirm closed
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

main(); // Run the async function
