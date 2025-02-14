import { useState, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";

interface PopupFormProps {
  popupHandle: () => void;
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
  const [workExperiences, setWorkExperiences] = useState([{ id: 1 }]);

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (
    value: SingleValue<{ value: string; label: string }>
  ) => {
    setnationality(value);
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { id: workExperiences.length + 1 },
    ]);
    console.log(workExperiences);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={popupHandle}
          className="rounded-full font-bold text-xl p-4 border-2 border-black w-10 h-10 flex items-center justify-center"
        >
          X
        </button>
      </div>
      <form action="" className="formModal">
        <h2>Job Application Form</h2>

        {/* General Info */}
        <div className="formSection">
          <div className="">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" />
          </div>

          <div className="">
            <label htmlFor="jobApplied">Job Applied</label>
            <input type="text" id="jobApplied" />
          </div>

          <div className="">
            <label htmlFor="workHistory">Work History</label>
            <input type="text" id="workHistory" />
          </div>

          <div className="">
            <label htmlFor="contractTime">Contract Time</label>
            <input type="text" id="contractTime" />
          </div>

          <div className="">
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input type="text" id="monthlySalary" />
          </div>

          <div className="">
            <label htmlFor="gender">Gender</label>
            <div className="flex gap-3 radioGroup">
              <div>
                <input type="radio" id="male" name="gender" value="Male" />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="Female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="">
            <label htmlFor="complexion">complexion</label>
            <input type="text" id="complexion" />
          </div>
          <div className="">
            <label htmlFor="civilStatus">Civil Status</label>
            <Select
              options={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
                { value: "divorced", label: "Divorced" },
                { value: "widowed", label: "Widowed" },
              ]}
            />
          </div>
        </div>

        <h3>Emergency Contact</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="contactName">Name</label>
            <input type="text" id="contactName" />
          </div>

          <div className="">
            <label htmlFor="contactPhone">Phone</label>
            <input type="number" id="contactPhone" />
          </div>
        </div>

        <h3>Education Qualification</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="latestEducation">Latest Education Completed</label>
            <Select
              options={[
                { value: "primarySchool", label: "Primary School" },
                { value: "highSchool", label: "High School" },
                { value: "collage", label: "Collage" },
                { value: "additionalCourse", label: "Additional Course" },
              ]}
            />
          </div>
          <div className="">
            <label htmlFor="others">Others</label>
            <input type="text" id="others" />
          </div>
        </div>

        <h3>Passport Detail</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="passportNo">Passport No.</label>
            <input type="text" id="passportNo" />
          </div>

          <div className="">
            <label htmlFor="placeOfIssue">Place of Issue</label>
            <input type="text" id="placeOfIssue" />
          </div>

          <div className="">
            <label htmlFor="dateOfIssue">Date of Issue</label>
            <input type="date" id="dateOfIssue" />
          </div>

          <div className="">
            <label htmlFor="dateOfExpire">Date of Expire</label>
            <input type="date" id="dateOfExpire" />
          </div>
        </div>

        <h3>Application Detail</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="nationality">Nationality</label>
            <Select
              options={options}
              value={nationality}
              onChange={changeHandler}
            />
          </div>

          <div className="">
            <label htmlFor="religion">Religion</label>
            <input type="text" id="religion" />
          </div>

          <div className="">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" />
          </div>

          <div className="">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
          </div>

          <div className="">
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input type="text" id="placeOfBirth" />
          </div>

          <div className="">
            <label htmlFor="homeAddress">Home Address</label>
            <input type="text" id="homeAddress" />
          </div>

          <div className="">
            <label htmlFor="contactNo">Contact No.</label>
            <input type="tel" id="contactNo" />
          </div>

          <div className="">
            <label htmlFor="education">Education</label>
            <input type="text" id="education" />
          </div>

          <div className="">
            <label htmlFor="maritalStatus">Marital Status</label>
            <input type="text" id="maritalStatus" />
          </div>

          <div className="">
            <label htmlFor="children">Children</label>
            <input type="number" id="children" />
          </div>

          <div className="">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="number" id="weight" />
          </div>

          <div className="">
            <label htmlFor="height">Height (cm)</label>
            <input type="number" id="height" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h3>Work Experience</h3>
          <button type="button" onClick={handleAddWorkExperience}>
            Add
          </button>
        </div>
        {workExperiences.map((exp) => (
          <div key={exp.id} className="formSection">
            <div className="">
              <label htmlFor="country">
                <b>{exp.id}.</b> Country
              </label>
              <input type="text" id="country" />
            </div>

            <div className="">
              <label htmlFor="position">Position</label>
              <Select
                options={[
                  { value: "houseMaid", label: "House Maid" },
                  { value: "babysitter", label: "Babysitter" },
                  { value: "cooker", label: "Cooker" },
                  { value: "driver", label: "Driver" },
                  { value: "others", label: "Others" },
                ]}
              />
            </div>

            <div className="">
              <label htmlFor="others">Others</label>
              <input type="text" id="others" />
            </div>

            <div className="">
              <label htmlFor="duration">Duration (years)</label>
              <input type="number" id="duration" />
            </div>
          </div>
        ))}

        <h3>Language & Skills</h3>
        <div className="formSection">
          <div className="">
            <label htmlFor="languages">Languages</label>
            <div className="checkboxGroup">
              <label htmlFor="english">English</label>
              <input type="checkbox" id="english" className="" />
            </div>
            <div className="checkboxGroup">
              <label htmlFor="arabic">Arabic</label>
              <input type="checkbox" id="arabic" />
            </div>
            <div className="checkboxGroup">
              <label htmlFor="otherLanguages">Others</label>
              <input type="checkbox" id="otherLanguages" />
            </div>
          </div>
          <div className="">
            <label htmlFor="skills">Skills</label>
            <div className="checkboxGroup">
              <label htmlFor="cleaning">Cleaning</label>
              <input type="checkbox" id="cleaning" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="washing">Washing</label>
              <input type="checkbox" id="washing" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="ironing">Ironing</label>
              <input type="checkbox" id="ironing" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="cooking">Cooking</label>
              <input type="checkbox" id="cooking" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="babySitting">Baby Sitting</label>
              <input type="checkbox" id="babySitting" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="childrenCare">Children Care</label>
              <input type="checkbox" id="childrenCare" />
            </div>

            <div className="checkboxGroup">
              <label htmlFor="elderCare">Elder Care</label>
              <input type="checkbox" id="elderCare" />
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
            ></textarea>
          </div>

          <div className="">
            <label htmlFor="nameSignature">Name & Signature</label>
            <input type="text" id="nameSignature" />
          </div>
        </div>

        {/* Buttons */}
        <div className="formSection">
          <div>
            <label htmlFor="submitTo">Submit To</label>
            <Select
              options={[
                { value: "Admin", label: "Admin" },
                { value: "manager", label: "Manager" },
              ]}
            />
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <button type="button" onClick={popupHandle} className="cancelBtn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
