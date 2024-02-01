const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const response = {
    message: err.message,
    stack: err.stack,
  };

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
