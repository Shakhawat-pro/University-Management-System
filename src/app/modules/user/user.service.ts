import config from "../../config";
import { TStudent } from "../student/student.interface ";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {

    // Create a user object
    const userData: Partial<TUser> = {}

    // if password is not given, use default password
    userData.password = password || (config.default_password as string)

    // set student role    
    userData.role = "student"

    // set manually generated id
    userData.id = "2030100001"

    // Create a user
    const newUser = await User.create(userData)

    // Create a Student
    if (Object.keys(newUser).length) {
        // set id, _id as user
        studentData.id = newUser.id
        studentData.user = newUser._id  //reference  _id

        const newStudent = await StudentModel.create(studentData)
        return newStudent
    }


    return newUser;

};



export const userService = {
    createStudentIntoDB
};