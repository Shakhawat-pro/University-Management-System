import Joi from 'joi';


const studentJoiSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.object({
      firstName: Joi.string().required(),
      middleName: Joi.string().optional(),
      lastName: Joi.string().required(),
    }).required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string().email().required(),
    contactNo: Joi.number().required(),
    emergencyContactNo: Joi.number().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').optional(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: Joi.object({
      fatherName: Joi.string().required(),
      fatherOccupation: Joi.string().required(),
      fatherContactNo: Joi.number().required(),
      motherName: Joi.string().required(),
      motherOccupation: Joi.string().required(),
      motherContactNo: Joi.number().required(),
    }).required(),
    profileImg: Joi.string().optional(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
    isDeleted: Joi.boolean().default(false)
  });

  export default studentJoiSchema
