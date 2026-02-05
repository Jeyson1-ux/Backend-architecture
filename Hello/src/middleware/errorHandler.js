import http from 'http'

export const errorHandler = {} // Namespace för felhanterare

errorHandler. notFoundDefault = (req, res, next) => {
    const err = new Error(http.STATUS_CODES[404] || 'Not Found') // Skapa ett felobjekt för 404
    err.status = 404 // Sätt statuskoden till 404
    next(err) // Pass the error to the global error handler
}

// we add a global error handler, in the same file,
//  that shall catch all errors in the application.
/**
 * Global error handler.
 *
 * @param {object} err The caught error.
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 * @param {function} next Express next function.
 */
errorHandler.errorDefault = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(err.stack)
  }

  const statusCode = err.status || 500
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Something went wrong' // Hide error details in production
      : err.message

  res.status(statusCode).json({
    status: statusCode,
    message,
  })
}
