import 'dotenv/config'// laddar .env filen automatiskt
import { app } from './src/express.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Imports the app from src/express.js.

// Starts the server on port 3000.

// Logs a message in the terminal.