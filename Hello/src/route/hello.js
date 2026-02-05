import http from 'http'

import express from 'express'

export const router = express.Router()

// När användaren går till / (root) → visa Hello World
router.get('/', (req, res) => {
    res.send('Hello World!')
})

// När användaren går till /hello → samma sak (valfritt)
router.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// När användaren går till /api/hello → JSON med datum
router.get('/api/hello', (req, res) => {
    res.json({
        message: 'Hello World!',
        date: new Date()
    })
})

router.get('/500', (req, res, next) => {
  const err = new Error(http.STATUS_CODES[500] || 'Internal Server Error');
  err.status = 500;
  next(err); // Pass the error to the error handler
});
