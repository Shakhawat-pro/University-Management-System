import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';


const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student are Retrieved Successfully',
    data: result,
  })
});


const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.id;
  const result = await studentService.getSingleFromDB(studentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is Retrieved Successfully',
    data: result,
  })
})


const deleteStudent = catchAsync(async (req, res) => {
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
