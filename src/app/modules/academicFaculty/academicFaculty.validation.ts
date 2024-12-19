import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic must be string",
        })
    })

});

const updateAcademicFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic must be string",
        })
    })
});


export const academicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
}