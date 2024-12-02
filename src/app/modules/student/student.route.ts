import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();
// will call controller func
// router.post('/create-student', studentControllers.createStudent);
// router.post('/joi/create-student', studentControllers.createStudentWithJoi);
// router.post('/zod/create-student', studentControllers.createStudentWithZod);
router.get('/', studentControllers.getAllStudent);
router.get('/:id', studentControllers.getSingleStudent);
router.delete('/:id', studentControllers.deleteStudent);

export const StudentRoutes = router;
