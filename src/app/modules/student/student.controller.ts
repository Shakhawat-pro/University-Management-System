/* eslint-disable @typescript-eslint/no-unused-vars */
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Higher Order Function
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err))
  }
}


const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await studentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student are Retrieved Successfully',
    data: result,
  })
});


const getSingleStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  const result = await studentService.getSingleFromDB(studentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is Retrieved Successfully',
    data: result,
  })
})


const deleteStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  const result = await studentService.deleteStudentFromDB(studentId);
  if (result) {
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student is Deleted Successfully',
      data: result,
    })
  }
})

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent
};
