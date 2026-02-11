import db from './config/database.js'; // import your database module

async function main() {
  const con = await db.getConnection(); // get the connection

  const sql = 'SELECT * FROM `user` WHERE `username` = ?'; // use a parameterized query to prevent SQL injection
  const args = ['alice'];

  const [results] = await con.execute(sql, args); // use prepared statement

  console.log(results); // print results

  await db.close(); // close the connection
}

main();
