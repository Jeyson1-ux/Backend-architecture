import express from 'express'

import { router as hellRoute} from "./hello.js"

import { roter as tasksRoute} from "tasks.js"

router.use("/api/vi,", tasksRoute)

export const router = express.Router()

router.use("/", hellRoute)