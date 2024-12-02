import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';


const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student are Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
    // res.status(400).json({
    //   success: false,
    //   massage: err.message || "Something went wrong",
    //   error: err,
    // });
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentId = req.params.id;
    const result = await studentService.getSingleFromDB(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student is Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (err) {
    next(err)
  }
};

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  deleteStudent
};
