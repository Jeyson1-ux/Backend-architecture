import logger from 'morgan' // Vad den gör är att den loggar HTTP-förfrågningar i terminalen
import { errorHandler } from './middleware/errorHandler.js'
import express from 'express'
import { router } from './route/index.js'

export const app = express()

// Inga statiska filer behövs nu
app.use('/', router)

import logger from 'morgan'

app.use(logger('dev', {
    immediate: true, // loggar direkt när förfrågan kommer in
    skip:() => process.env.NODE_ENV === 'test'// hoppa över loggning under tester
}))
//NODE_ENV är en miljövariabel som ofta används för att ange i 
// vilket läge applikationen körs, t.ex. "development", "production" eller "test".

app.use(errorHandler.notFoundDefault) // Hantera 404-fel

app.use(errorHandler.errorDefault)// Global felhanterare

app.use(express.static('public')) // Servera statiska filer från "public" mappen