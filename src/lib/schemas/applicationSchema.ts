import { z } from "zod";

export const generalInfoSchema = z.object({
    fullName: z.string().min(3),
    jobApplied: z.enum(["houseMaid", "babysitter", "cooker", "driver", "others"]),
    others: z.string().optional(),
    contractTime: z.number().min(1),
    monthlySalary: z.number().min(1, "Please specify the monthly salary amount"),
    gender: z.enum(["Male", "Female"]),
    complexion: z.string().min(1, "Please specify your complexion"),
    civilStatus: z.enum(["single", "married", "divorced", "widowed"])
});

export const emergencyContactSchema = z.object({
    contactName: z.string().min(3, "Please provide an emergency contact name"),
    contactPhone: z.number().min(1, "Please provide an emergency contact phone number")
});

export const educationQualificationSchema = z.object({
    latestEducation: z.enum(["primarySchool", "highSchool", "collage", "additionalCourse"]),
    others: z.string().optional()
});

export const passportDetailSchema = z.object({
    passportNo: z.string().min(8, "Please enter your passport number"),
    placeOfIssue: z.string().min(2, "Please specify where your passport was issued"),
    dateOfIssue: z.string()
        .min(1, "Please enter the passport issue date")
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        })
        .refine((val) => new Date(val) < new Date(), {
            message: "Date must be in the past",
        }),
    dateOfExpire: z.string()
        .min(1, "Please enter the passport expiry date")
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        })
        .refine((val) => new Date(val) > new Date(), {
            message: "Date must be in the future",
        }),
});

export const applicationDetailSchema = z.object({
    nationality: z.object({
        value: z.string().min(1, "Please select your nationality"),
        label: z.string()
    }),
    religion: z.string().min(1, "Please specify your religion"),
    dateOfBirth: z.string()
        .min(1, "Please enter your date of birth")
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        })
        .refine((val) => new Date(val) < new Date(), {
            message: "Date must be in the future",
        }),
    age: z.number(),
    placeOfBirth: z.string().min(3, "Please enter your place of birth"),
    homeAddress: z.string().min(3, "Please provide your home address"),
    contactNo: z.string().min(9, "Please enter your contact number"),
    children: z.number(),
    weight: z.number(),
    height: z.number()
});

export const workExperienceSchema = z.object({
    country: z.string().min(1, "Please specify the country where you worked"),
    position: z.enum(["houseMaid", "babysitter", "cooker", "driver", "others"]),
    others: z.string().optional(),
    duration: z.number()
});

export const languageSkillsSchema = z.object({
    languages: z.object({
        english: z.boolean(),
        arabic: z.boolean(),
        otherLanguages: z.boolean()
    }),
    skills: z.object({
        cleaning: z.boolean(),
        washing: z.boolean(),
        ironing: z.boolean(),
        cooking: z.boolean(),
        babySitting: z.boolean(),
        childrenCare: z.boolean(),
        elderCare: z.boolean()
    })
});

export const additionalInfoSchema = z.object({
    remarks: z.string().optional(),
    nameSignature: z.string().min(1, "Please provide your signature")
});

export const submitSchema = z.object({
    submitTo: z.enum(["Admin", "Manager"])
});

export const applicationSchema = z.object({
    generalInfo: generalInfoSchema,
    emergencyContact: emergencyContactSchema,
    educationQualification: educationQualificationSchema,
    passportDetail: passportDetailSchema,
    applicationDetail: applicationDetailSchema,
    workExperiences: z.array(workExperienceSchema),
    languageSkills: languageSkillsSchema,
    additionalInfo: additionalInfoSchema,
    submit: submitSchema
});