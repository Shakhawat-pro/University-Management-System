import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: UserRouters
    },
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))

// router.use('/users', UserRouters)
// router.use('/students', StudentRoutes)

export default router