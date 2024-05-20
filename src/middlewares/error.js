const errorHandler = (err, req, res, next) => {
  res.status(500)
  res.json({ error: err.message })
}

export default errorHandler