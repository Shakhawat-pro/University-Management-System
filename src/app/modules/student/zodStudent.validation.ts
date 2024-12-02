import { z } from 'zod';

const studentZodSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  name: z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last name is required" }),
  }),
  gender: z.enum(['male', 'female', 'other'], { message: "Gender must be 'male', 'female', or 'other'" }),
  dateOfBirth: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  contactNo: z.number(),
  emergencyContactNo: z.number(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().min(1, { message: "Present address is required" }),
  permanentAddress: z.string().min(1, { message: "Permanent address is required" }),
  guardian: z.object({
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: z.string().min(1, { message: "Father's occupation is required" }),
    fatherContactNo: z.number(),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: z.string().min(1, { message: "Mother's occupation is required" }),
    motherContactNo: z.number(),
  }),
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false)
});

export default studentZodSchema;