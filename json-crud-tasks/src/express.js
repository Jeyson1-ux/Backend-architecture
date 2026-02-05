import express from 'express'
import { router } from './route/index.js'

export const app = express()

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.send('Server is running')
})


app.use((req, res) => {
    res.status(404).json({ message: 'Route Not Found'});
})