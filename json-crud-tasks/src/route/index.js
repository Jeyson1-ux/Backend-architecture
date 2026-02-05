import { router as tasksRoute } from './tasks.js'
import express from 'express'

export const router = express.Router()

router.use('/api/v1', tasksRoute)
