import { Schema, model } from 'mongoose';
import validator from 'validator';
import { TStudentModel, TStudent } from './student.interface ';



const studentSchema = new Schema<TStudent, TStudentModel>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    unique: true,
  },
  name: {
    type: {
      firstName: {
        type: String,
        required: [true, 'First name is required']
      },
      middleName: { type: String }, // Optional
      lastName: {
        type: String,
        required: [true, 'Last name is required'],
        validate: {
          validator: (value: string) => validator.isAlpha(value),
          message: '{VALUE} must contain only letters'
        }
      },
    },
    required: [true, 'Name object is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: "Gender must be 'male', 'female', or 'other'.",
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    // unique: true 
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is note a valid email type"
    },
    unique: true,
  },
  contactNo: {
    type: Number,
    required: [true, 'Contact number is required']
  },
  emergencyContactNo: {
    type: Number,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: "Blood group must be one of: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required']
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: {
      fatherName: {
        type: String,
        required: [true, "Father's name is required"],
      },
      fatherOccupation: {
        type: String,
        required: [true, "Father's occupation is required"],
      },
      fatherContactNo: {
        type: Number,
        required: [true, "Father's contact number is required"],
      },
      motherName: {
        type: String,
        required: [true, "Mother's name is required"],
      },
      motherOccupation: {
        type: String,
        required: [true, "Mother's occupation is required"],
      },
      motherContactNo: {
        type: Number,
        required: [true, "Mother's contact number is required"],
      },
    },
    required: [true, 'Guardian information is required'],
  },
  profileImg: {
    type: String
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemesterModel"
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  toJSON: {
    virtuals: true
  }
});

// virtual  
studentSchema.virtual('fullName').get(function () {
  return (
    `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
  )
})


//  Query Middleware 
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})


//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};


export const StudentModel = model<TStudent, TStudentModel>('Students', studentSchema);



//creating a custom instance method
// studentSchema.methods.isUserExits = async function(id:string) {
//   const existingUser = await StudentModel.findOne({id})
//   return existingUser
// }