import express from 'express'
import { controller as taskController } from '../controllers/taskController.js'

export const router = express.Router()

// GET /tasks

router.get('/tasks', taskController.getTasks)

//GET task by ID

router.get('/tasks/:id', taskController.getTaskById)

// POST /tasks
router.post('/tasks', taskController.createTask)

// PATCH /tasks/:id
router.patch('/tasks/:id', taskController.updateTask)

// PUT /tasks/:id
router.put('/tasks/:id', taskController.replaceTask)

// DELETE /tasks/:id
router.delete('/tasks/:id', taskController.deleteTask)




