import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = Router()

router.post('/create-academic-faculty', validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema) , AcademicFacultyControllers.createAcademicFacultyStudent)
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties)
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)
router.patch('/:facultyId', validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema) ,AcademicFacultyControllers.updateAcademicFaculty)

export const AcademicFacultyRoutes = router