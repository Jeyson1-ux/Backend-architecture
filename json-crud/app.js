import { app } from './src/express.js';
import DatabaseService from "./src/service/DatabaseService.js";

await DatabaseService.connect(); // connect to database

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port} right now!`);
});
// export = används för att exportera funktioner, objekt eller värden från en modul så att de kan importeras och användas i andra moduler.
// import = används för att importera funktioner, objekt eller värden från en annan modul så att de kan användas i den aktuella modulen.