import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POST from controller: API create new boards' })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: new Error(error).message
    })
  }
}

export const boardController = {
  createNew
}
