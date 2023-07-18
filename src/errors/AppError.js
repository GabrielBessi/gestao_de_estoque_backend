class AppError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandle = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json(error.message);
  }

  console.log(error.message);
  return response.status(500).json({ message: "Internal server error" });
};

module.exports = { AppError, errorHandle };
