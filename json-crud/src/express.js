import express from 'express'; // import express module
//express = är en webbramverk för Node.js som används för att bygga webbapplikationer och API:er.
//  Det gör det enklare att hantera HTTP-förfrågningar, routing, middleware och andra funktioner 
// som behövs för att skapa en webbserver.

import { router as usersRouter}  from './route/usersRoute.js';

export const app = express(); //skapa en express applikation
app.use(express.json()); // middleware för att parsa JSON i request body
//parsa = att omvandla data från ett format till ett annat, i det här fallet från JSON-format till 
// JavaScript-objekt som kan användas i applikationen.
app.use('/users', usersRouter); // använd userRouter för att hantera routes relaterade till användare