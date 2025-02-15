import { applicationSchema } from "@/lib/schemas/applicationSchema";
import { useState, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { ResponseStatusProps } from "@/lib/interface/ResponseStatus";

type FormFields = z.infer<typeof applicationSchema>;

interface PopupFormProps {
  popupHandle: ({
    successResponse,
  }: {
    successResponse: boolean | null;
  }) => void;
}

const PopupForm = ({ popupHandle }: PopupFormProps) => {
  const [nationality, setnationality] = useState<{
    value: string;
    label: string;
  } | null>(() => {
    const defaultOption =
      countryList()
        .getData()
        .find((option) => option.label === "Ethiopia") || null;
    return defaultOption;
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      applicationDetail: {
        nationality: nationality || { value: "", label: "" },
      },
      submit: {
        submitTo: "Admin",
      },
    },
  });
  const [workExperiences, setWorkExperiences] = useState([{ id: 1 }]);
  const options = useMemo(() => countryList().getData(), []);

  const onSubmit = (data: FormFields) => {
    console.log("Form submitted successfully");
    console.log(data);

    // setStatus(true);
    popupHandle({ successResponse: true }); // Close the popup when the form is submitted
  };

  const changeHandler = (
    value: SingleValue<{ value: string; label: string }>
  ) => {
    setnationality(value);
    setValue(
      "applicationDetail.nationality",
      value || { value: "", label: "" }
    );
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { id: workExperiences.length + 1 },
    ]);
    setValue(`workExperiences.${workExperiences.length}`, {
      country: "",
      position: "houseMaid",
      others: "",
      duration: 0,
    });
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => popupHandle({ successResponse: false })}
          className="rounded-full font-bold text-xl p-4 border-2 border-black w-10 h-10 flex items-center justify-center"
        >
          X
        </button>
      </div>
      <form action="" className="formModal" onSubmit={handleSubmit(onSubmit)}>
        <h2>Job Application Form</h2>

        {/* General Info */}
        <div className="formSection">
          <div className="">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              {...register("generalInfo.fullName")}
            />
            <span className="errors">
              {errors.generalInfo?.fullName?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="jobApplied">Job Applied</label>
            <Controller
              name="generalInfo.jobApplied"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "houseMaid", label: "House Maid" },
                    { value: "babysitter", label: "Babysitter" },
                    { value: "cooker", label: "Cooker" },
                    { value: "driver", label: "Driver" },
                    { value: "others", label: "Others" },
                  ]}
                  onChange={(selected) => field.onChange(selected?.value)}
                  value={options.find((option) => option.value === field.value)}
                />
              )}
            />
          </div>
          <div className="">
            <label htmlFor="others">Others</label>
            <input
              type="text"
              id="others"
              {...register("generalInfo.others")}
            />
            <span className="errors">
              {errors.generalInfo?.others?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="contractTime">Contract Time</label>
            <input
              type="number"
              id="contractTime"
              {...register("generalInfo.contractTime", { valueAsNumber: true })}
            />
            <span className="errors">
              {errors.generalInfo?.contractTime?.message}
            </span>
          </div>
          {errors.generalInfo?.contractTime && (
            <span className="errors">
              {errors.generalInfo.contractTime.message}
            </span>
          )}

          <div className="">
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input
              type="number"
              id="monthlySalary"
              {...register("generalInfo.monthlySalary", {
                valueAsNumber: true,
              })}
            />
            <span className="errors">
              {errors.generalInfo?.monthlySalary?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="gender">Gender</label>
            <div className="flex gap-3 radioGroup">
              <div>
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  {...register("generalInfo.gender")}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  {...register("generalInfo.gender")}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <span className="errors">
              {errors.generalInfo?.gender?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="complexion">complexion</label>
            <input
              type="text"
              id="complexion"
              {...register("generalInfo.complexion")}
            />
            <span className="errors">
              {errors.generalInfo?.complexion?.message}
            </span>
          </div>

          {/* add zod */}
          <div className="">
            <label htmlFor="civilStatus">Civil Status</label>
            <Controller
              name="generalInfo.civilStatus"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "single", label: "Single" },
                    { value: "married", label: "Married" },
                    { value: "divorced", label: "Divorced" },
                    { value: "widowed", label: "Widowed" },
                  ]}
                  onChange={(selected) => field.onChange(selected?.value)}
                  value={options.find((option) => option.value === field.value)}
                />
              )}
            />
          </div>
        </div>

        <h3>Emergency Contact</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              id="contactName"
              {...register("emergencyContact.contactName")}
            />
            <span className="errors">
              {errors.emergencyContact?.contactName?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="contactPhone">Phone</label>
            <input
              type="number"
              id="contactPhone"
              {...register("emergencyContact.contactPhone", {
                valueAsNumber: true,
              })}
            />
            <span className="errors">
              {errors.emergencyContact?.contactPhone?.message}
            </span>
          </div>
        </div>

        <h3>Education Qualification</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="latestEducation">Latest Education Completed</label>
            <Controller
              name="educationQualification.latestEducation"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "primarySchool", label: "Primary School" },
                    { value: "highSchool", label: "High School" },
                    { value: "collage", label: "Collage" },
                    { value: "additionalCourse", label: "Additional Course" },
                  ]}
                  onChange={(selected) => field.onChange(selected?.value)}
                  value={options.find((option) => option.value === field.value)}
                />
              )}
            />
          </div>
          <div className="">
            <label htmlFor="others">Others</label>
            <input
              type="text"
              id="others"
              {...register("educationQualification.others")}
            />
            <span className="errors">
              {errors.educationQualification?.others?.message}
            </span>
          </div>
        </div>

        <h3>Passport Detail</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="passportNo">Passport No.</label>
            <input
              type="text"
              id="passportNo"
              {...register("passportDetail.passportNo")}
            />
            <span className="errors">
              {errors.passportDetail?.passportNo?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="placeOfIssue">Place of Issue</label>
            <input
              type="text"
              id="placeOfIssue"
              {...register("passportDetail.placeOfIssue")}
            />
            <span className="errors">
              {errors.passportDetail?.placeOfIssue?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="dateOfIssue">Date of Issue</label>
            <input
              type="date"
              id="dateOfIssue"
              {...register("passportDetail.dateOfIssue")}
            />
            <span className="errors">
              {errors.passportDetail?.dateOfIssue?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="dateOfExpire">Date of Expire</label>
            <input
              type="date"
              id="dateOfExpire"
              {...register("passportDetail.dateOfExpire")}
            />
            <span className="errors">
              {errors.passportDetail?.dateOfExpire?.message}
            </span>
          </div>
        </div>

        <h3>Application Detail</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="nationality">Nationality</label>
            <Controller
              name="applicationDetail.nationality"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryList().getData()}
                  value={nationality}
                  onChange={changeHandler}
                />
              )}
            />
            <span className="errors">
              {errors.applicationDetail?.nationality?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="religion">Religion</label>
            <input
              type="text"
              id="religion"
              {...register("applicationDetail.religion")}
            />
            <span className="errors">
              {errors.applicationDetail?.religion?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              {...register("applicationDetail.dateOfBirth")}
            />
            <span className="errors">
              {errors.applicationDetail?.dateOfBirth?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              {...register("applicationDetail.age", { valueAsNumber: true })}
            />
            <span className="errors">
              {errors.applicationDetail?.age?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input
              type="text"
              id="placeOfBirth"
              {...register("applicationDetail.placeOfBirth")}
            />
            <span className="errors">
              {errors.applicationDetail?.placeOfBirth?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="homeAddress">Home Address</label>
            <input
              type="text"
              id="homeAddress"
              {...register("applicationDetail.homeAddress")}
            />
            <span className="errors">
              {errors.applicationDetail?.homeAddress?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="contactNo">Contact No.</label>
            <input
              type="tel"
              id="contactNo"
              {...register("applicationDetail.contactNo")}
            />
            <span className="errors">
              {errors.applicationDetail?.contactNo?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="children">Children</label>
            <input
              type="number"
              id="children"
              {...register("applicationDetail.children", {
                valueAsNumber: true,
              })}
            />
            <span className="errors">
              {errors.applicationDetail?.children?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              {...register("applicationDetail.weight", { valueAsNumber: true })}
            />
            <span className="errors">
              {errors.applicationDetail?.weight?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              {...register("applicationDetail.height", { valueAsNumber: true })}
            />
            <span className="errors">
              {errors.applicationDetail?.height?.message}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h3>Work Experience</h3>
          <button type="button" onClick={handleAddWorkExperience}>
            Add
          </button>
        </div>
        {workExperiences.map((exp, index) => (
          <div key={exp.id} className="formSection">
            <div className="">
              <label htmlFor={`workExperiences.${index}.country`}>
                <b>{exp.id}.</b> Country
              </label>
              <input
                type="text"
                id={`workExperiences.${index}.country`}
                {...register(`workExperiences.${index}.country`)}
              />
              <span className="errors">
                {errors.workExperiences?.[index]?.country?.message}
              </span>
            </div>

            <div className="">
              <label htmlFor={`workExperiences.${index}.position`}>
                Position
              </label>
              <Controller
                name={`workExperiences.${index}.position`}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "houseMaid", label: "House Maid" },
                      { value: "babysitter", label: "Babysitter" },
                      { value: "cooker", label: "Cooker" },
                      { value: "driver", label: "Driver" },
                      { value: "others", label: "Others" },
                    ]}
                    onChange={(selected) => field.onChange(selected?.value)}
                    value={options.find(
                      (option) => option.value === field.value
                    )}
                  />
                )}
              />
            </div>

            <div className="">
              <label htmlFor={`workExperiences.${index}.others`}>Others</label>
              <input
                type="text"
                id={`workExperiences.${index}.others`}
                {...register(`workExperiences.${index}.others`)}
              />
              <span className="errors">
                {errors.workExperiences?.[index]?.others?.message}
              </span>
            </div>

            <div className="">
              <label htmlFor={`workExperiences.${index}.duration`}>
                Duration (years)
              </label>
              <input
                type="number"
                id={`workExperiences.${index}.duration`}
                {...register(`workExperiences.${index}.duration`, {
                  valueAsNumber: true,
                })}
              />
              <span className="errors">
                {errors.workExperiences?.[index]?.duration?.message}
              </span>
            </div>
          </div>
        ))}

        <h3>Language & Skills</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="languages">Languages</label>
            <div className="checkboxGroup">
              <label htmlFor="english">English</label>
              <input
                type="checkbox"
                id="english"
                {...register("languageSkills.languages.english")}
              />
              <span className="errors">
                {errors.languageSkills?.languages?.english?.message}
              </span>
            </div>
            <div className="checkboxGroup">
              <label htmlFor="arabic">Arabic</label>
              <input
                type="checkbox"
                id="arabic"
                {...register("languageSkills.languages.arabic")}
              />
              <span className="errors">
                {errors.languageSkills?.languages?.arabic?.message}
              </span>
            </div>
            <div className="checkboxGroup">
              <label htmlFor="otherLanguages">Others</label>
              <input
                type="checkbox"
                id="otherLanguages"
                {...register("languageSkills.languages.otherLanguages")}
              />
              <span className="errors">
                {errors.languageSkills?.languages?.otherLanguages?.message}
              </span>
            </div>
          </div>
          <div className="">
            <label htmlFor="skills">Skills</label>
            <div className="checkboxGroup">
              <label htmlFor="cleaning">Cleaning</label>
              <input
                type="checkbox"
                id="cleaning"
                {...register("languageSkills.skills.cleaning")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.cleaning?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="washing">Washing</label>
              <input
                type="checkbox"
                id="washing"
                {...register("languageSkills.skills.washing")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.washing?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="ironing">Ironing</label>
              <input
                type="checkbox"
                id="ironing"
                {...register("languageSkills.skills.ironing")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.ironing?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="cooking">Cooking</label>
              <input
                type="checkbox"
                id="cooking"
                {...register("languageSkills.skills.cooking")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.cooking?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="babySitting">Baby Sitting</label>
              <input
                type="checkbox"
                id="babySitting"
                {...register("languageSkills.skills.babySitting")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.babySitting?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="childrenCare">Children Care</label>
              <input
                type="checkbox"
                id="childrenCare"
                {...register("languageSkills.skills.childrenCare")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.childrenCare?.message}
              </span>
            </div>

            <div className="checkboxGroup">
              <label htmlFor="elderCare">Elder Care</label>
              <input
                type="checkbox"
                id="elderCare"
                {...register("languageSkills.skills.elderCare")}
              />
              <span className="errors">
                {errors.languageSkills?.skills?.elderCare?.message}
              </span>
            </div>
          </div>
        </div>

        {/* More section */}
        <div className="formSection grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="remarks">Remarks</label>
            <textarea
              id="remarks"
              style={{
                border: "1px solid #000",
                width: "100%",
                height: "100px",
              }}
              {...register("additionalInfo.remarks")}
            ></textarea>
            <span className="errors">
              {errors.additionalInfo?.remarks?.message}
            </span>
          </div>

          <div className="">
            <label htmlFor="nameSignature">Name & Signature</label>
            <input
              type="text"
              id="nameSignature"
              {...register("additionalInfo.nameSignature")}
            />
            <span className="errors">
              {errors.additionalInfo?.nameSignature?.message}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="formSection">
          <div>
            <label htmlFor="submitTo">Submit To</label>
            <Controller
              name="submit.submitTo"
              control={control}
              defaultValue="Admin"
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Admin", label: "Admin" },
                    { value: "Manager", label: "Manager" },
                  ]}
                  onChange={(selected) => field.onChange(selected?.value)}
                  value={
                    field.value
                      ? { value: field.value, label: field.value }
                      : null
                  }
                />
              )}
            />
            <span>{errors.submit?.submitTo?.message}</span>
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <button
            type="button"
            onClick={() => popupHandle({ successResponse: false })}
            className="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
