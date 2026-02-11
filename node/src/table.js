import db from './config/database.js'; // import your database module
const con = await db.getConnection(); // get the connection

async function main() {
    const sql = 'SELECT * FROM `user`'; // use a parameterized query to prevent SQL injection

    const [results] = await con.execute(sql); // use prepared statement

    console.table(results);// print results

    await db.close(); // close the connection
}
    
main(); // run the main function