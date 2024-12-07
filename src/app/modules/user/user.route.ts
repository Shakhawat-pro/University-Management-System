import express from 'express';
import { userController } from './user.controller';
import { studentValidation } from '../student/zodStudent.validation';
import validateRequest from '../../utils/validateRequest';

const router = express.Router()



router.post('/create-student', validateRequest(studentValidation.createStudentZodSchema), userController.createStudent)
router.post('/create-faculty')
router.post('/create-admin')

export const UserRouters = router