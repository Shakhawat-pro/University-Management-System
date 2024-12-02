import { StudentModel } from './student.model';



const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleFromDB = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  const result = await StudentModel.aggregate([{ $match: { id } }])
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};



export const studentService = {
  getAllStudentFromDB,
  getSingleFromDB,
  deleteStudentFromDB
};
