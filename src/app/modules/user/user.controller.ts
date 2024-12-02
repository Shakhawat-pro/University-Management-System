
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    //   const zodParsedData = .parse(studentData);
    const result = await userService.createStudentIntoDB(password, studentData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully",
      data: result
    })
  } catch (err) {
    next(err)
  }
};

export const userController = {
  createStudent
}
