import config from "../../config";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface ";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {

    // Create a user object
    const userData: Partial<TUser> = {}

    // if password is not given, use default password
    userData.password = password || (config.default_password as string)

    // set student role    
    userData.role = "student"

    // find academic semester info
    const admissionSemester = await AcademicSemesterModel.findById(payload.admissionSemester);
    // Ensure admissionSemester is not null
    if (!admissionSemester) {
        throw new Error("Admission semester not found");
    }


    //set  generated id
    userData.id = await generateStudentId(admissionSemester);

    // Create a user
    const newUser = await User.create(userData)

    // Create a Student
    if (Object.keys(newUser).length) {
        // set id, _id as user
        payload.id = newUser.id
        payload.user = newUser._id  //reference  _id

        const newStudent = await StudentModel.create(payload)
        return newStudent
    }


    return newUser;

};



export const userService = {
    createStudentIntoDB
};