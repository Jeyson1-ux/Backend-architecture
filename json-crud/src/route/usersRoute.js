import express from'express'; // import express module
import Controller from '../controller/UsersController.js';

export const router = express.Router(); // skapa en router för att hantera routes
//router = ett objekt som används för att definiera och hantera HTTP-rutter i en Express-applikation.

router.param('id', (req, res, next, id) => Controller.verifyUserId(req, res, next, id)); // middleware för att verifiera användar-id i routes som innehåller :id
//middleware = en funktion som har tillgång till request- och response-objekten i en Express-applikation, 
// och som kan utföra olika operationer innan eller efter att en route hanteras.
//  I det här fallet används middleware för att verifiera användar-id i routes som innehåller :id.

router.get('/', (req, res, next) => Controller.getAllUsers(req, res, next));// hämta alla användare

router.get('/search', (req, res, next) => Controller.searchUsers(req, res, next)); // sök efter användare baserat på söksträng i query-parametern

router.get('/:id', (req, res, next) => Controller.getUserById(req, res, next)); // hämta en användare baserat på id

router.post('/', (req, res, next) => Controller.addUser(req, res, next)); // lägg till en ny användare

router.put('/:id', (req, res, next) => Controller. updateUser(req, res,next)); // uppdatera användare med specificerat id

router.delete("/:id", (req, res, next) => Controller.deleteUser(req, res, next)) // radera användare med specificerat id

