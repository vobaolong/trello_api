import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    throw new ApiError(StatusCodes.BAD_GATEWAY, 'baolongdev test error')
    // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: 'POST from controller: API create new boards' })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}
