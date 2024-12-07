import { Router } from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../utils/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = Router()

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema) , academicSemesterController.createAcademicSemesterStudent)
router.get('/', academicSemesterController.getAllAcademicSemesters)
router.get('/:semesterId', academicSemesterController.getSingleAcademicSemester)
router.patch('/:semesterId', academicSemesterController.updateAcademicSemester)

export const AcademicSemesterRoutes = router