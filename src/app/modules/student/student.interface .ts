import { Model, Types } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: number;
  motherName: string;
  motherOccupation: string;
  motherContactNo: number;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId
  name: {
    firstName: string;
    middleName?: string; // Optional field
    lastName: string;
  };
  gender: "male" | "female" | "other"; // Aligned with the schema and Zod validation
  dateOfBirth?: Date;
  email: string;
  contactNo: number;
  emergencyContactNo: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; // Optional
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  profileImg?: string; // Optional field
  isDeleted: boolean,
};










//for creating static


export interface TStudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}



///////  for creating instance

// export type TStudentMethod = {
//   // eslint-disable-next-line no-unused-vars
//   isUserExits(id: string): Promise<TStudent | null>
// }

// export type TStudentModel = Model<TStudent, Record<string, never>, TStudentMethod>;
