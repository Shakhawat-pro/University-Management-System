import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";


const findLastStudentId = async (semesterCode: string, year: string) => {
    const lastStudent = await User.findOne({
        role: "student",
        id: { $regex: `^${year}${semesterCode}` } // Matches the year and semester code
    }, {
        id: 1,
        _id: 0
    }).sort({
        createdAt: -1
    }).lean()
    // 202203 0001
    return lastStudent?.id ? lastStudent.id : undefined
}


export const generateStudentId = async (payload: TAcademicSemester) => {
    let currentId = (0).toString()

    const lastStudentId = await findLastStudentId(payload.code, payload.year)
    // 2030 01 0001
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6) // 01
    const lastStudentYear = lastStudentId?.substring(0, 4)
    const currentSemesterCode = payload.code
    const currentYear = payload.year

    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode  && lastStudentYear === currentYear) {
        currentId = lastStudentId.substring(6) // 0001
    }


    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

    incrementId = `${payload.year}${payload.code}${incrementId}`

    return incrementId

}
