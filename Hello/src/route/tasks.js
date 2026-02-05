import express from 'express'
import { controller as taskController} from "..controllers/taskController.js"

router.get("/tasks", taskController.getTasks)//hämtar alla tasks 
export const router = express.Router() // skapar en ny router

router.get("/tasks", (req, res) => { // hanterar GET-förfrågningar till /tasks
    res.json([])
})

router.get("/tasks/:id", taskController.gestTaskById) // hämtar en task med specifikt id