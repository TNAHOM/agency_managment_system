import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { usePathname } from "next/navigation";

interface PopupFormProps {
  popupHandle: ({
    successResponse,
  }: {
    successResponse: boolean | null;
  }) => void;
}

const PopupForm = ({ popupHandle }: PopupFormProps) => {
  // Mock data for all fields
  const mockData = {
    generalInfo: {
      fullName: "Jane Doe",
      jobApplied: "houseMaid",
      others: "Special cooking skills",
      contractTime: 2,
      monthlySalary: 1500,
      gender: "Female",
      complexion: "Light",
      civilStatus: "single",
    },
    emergencyContact: {
      contactName: "John Smith",
      contactPhone: 1234567890,
    },
    educationQualification: {
      latestEducation: "highSchool",
      others: "Certificate in Child Care",
    },
    passportDetail: {
      passportNo: "AB1234567",
      placeOfIssue: "Addis Ababa",
      dateOfIssue: "2020-01-15",
      dateOfExpire: "2025-01-15",
    },
    applicationDetail: {
      nationality: { value: "ET", label: "Ethiopia" },
      religion: "Christian",
      dateOfBirth: "1990-05-20",
      age: 33,
      placeOfBirth: "Addis Ababa",
      homeAddress: "Bole Road 123",
      contactNo: "0912345678",
      children: 2,
      weight: 65,
      height: 165,
    },
    workExperiences: [
      {
        country: "Lebanon",
        position: "houseMaid",
        others: "Worked with elderly",
        duration: 3,
      },
    ],
    languageSkills: {
      languages: {
        english: true,
        arabic: false,
        otherLanguages: true,
      },
      skills: {
        cleaning: true,
        washing: true,
        ironing: true,
        cooking: false,
        babySitting: true,
        childrenCare: true,
        elderCare: true,
      },
    },
    additionalInfo: {
      remarks: "Excellent references available",
      nameSignature: "Jane D.",
    },
    submit: {
      submitTo: "Admin",
    },
  };
  const pathname = usePathname();
  const isReception = pathname.includes("reception");

  const [nationality, setNationality] = useState(
    () => mockData.applicationDetail.nationality
  );
  const [workExperiences, setWorkExperiences] = useState([{ id: 1 }]);
  const options = useMemo(() => countryList().getData(), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    popupHandle({ successResponse: true });
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { id: workExperiences.length + 1 },
    ]);
  };

  return (
    <div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => {
            const element = document.createElement("a");
            element.href = "/files/cv-template.docx";
            element.download = "cv-template.docx";
            document.body.appendChild(element);
            element.click();
          }}
          className="font-semibold text-lg rounded-sm p-1 border-2 border-black flex items-center justify-center"
        >
          ⬇ Download
        </button>
        <button
          onClick={() => popupHandle({ successResponse: false })}
          className="rounded-full font-bold text-xl p-4 border-2 border-black w-10 h-10 flex items-center justify-center"
        >
          X
        </button>
      </div>
      <form className="formModal" onSubmit={handleSubmit}>
        <h2>Job Application Form</h2>

        {/* General Info */}
        <div className="formSection">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              defaultValue={mockData.generalInfo.fullName}
            />
          </div>

          <div>
            <label htmlFor="jobApplied">Job Applied</label>
            <Select
              defaultValue={{
                value: mockData.generalInfo.jobApplied,
                label: "House Maid",
              }}
              options={[
                { value: "houseMaid", label: "House Maid" },
                { value: "babysitter", label: "Babysitter" },
                { value: "cooker", label: "Cooker" },
                { value: "driver", label: "Driver" },
                { value: "others", label: "Others" },
              ]}
            />
          </div>

          <div>
            <label htmlFor="others">Others</label>
            <input
              type="text"
              id="others"
              defaultValue={mockData.generalInfo.others}
            />
          </div>

          <div>
            <label htmlFor="contractTime">Contract Time</label>
            <input
              type="number"
              id="contractTime"
              defaultValue={mockData.generalInfo.contractTime}
            />
          </div>

          <div>
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input
              type="number"
              id="monthlySalary"
              defaultValue={mockData.generalInfo.monthlySalary}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <div className="flex gap-3 radioGroup">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  defaultChecked={mockData.generalInfo.gender === "Male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  defaultChecked={mockData.generalInfo.gender === "Female"}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="complexion">Complexion</label>
            <input
              type="text"
              id="complexion"
              defaultValue={mockData.generalInfo.complexion}
            />
          </div>

          <div>
            <label htmlFor="civilStatus">Civil Status</label>
            <Select
              defaultValue={{
                value: mockData.generalInfo.civilStatus,
                label:
                  mockData.generalInfo.civilStatus.charAt(0).toUpperCase() +
                  mockData.generalInfo.civilStatus.slice(1),
              }}
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
          <div>
            <label htmlFor="contactName">Name</label>
            <input
              type="text"
              id="contactName"
              defaultValue={mockData.emergencyContact.contactName}
            />
          </div>

          <div>
            <label htmlFor="contactPhone">Phone</label>
            <input
              type="number"
              id="contactPhone"
              defaultValue={mockData.emergencyContact.contactPhone}
            />
          </div>
        </div>

        <h3>Education Qualification</h3>
        <div className="formSection">
          <div>
            <label htmlFor="latestEducation">Latest Education Completed</label>
            <Select
              defaultValue={{
                value: mockData.educationQualification.latestEducation,
                label: "High School",
              }}
              options={[
                { value: "primarySchool", label: "Primary School" },
                { value: "highSchool", label: "High School" },
                { value: "collage", label: "Collage" },
                { value: "additionalCourse", label: "Additional Course" },
              ]}
            />
          </div>
          <div>
            <label htmlFor="others">Others</label>
            <input
              type="text"
              id="others"
              defaultValue={mockData.educationQualification.others}
            />
          </div>
        </div>

        <h3>Passport Detail</h3>
        <div className="formSection">
          <div>
            <label htmlFor="passportNo">Passport No.</label>
            <input
              type="text"
              id="passportNo"
              defaultValue={mockData.passportDetail.passportNo}
            />
          </div>

          <div>
            <label htmlFor="placeOfIssue">Place of Issue</label>
            <input
              type="text"
              id="placeOfIssue"
              defaultValue={mockData.passportDetail.placeOfIssue}
            />
          </div>

          <div>
            <label htmlFor="dateOfIssue">Date of Issue</label>
            <input
              type="date"
              id="dateOfIssue"
              defaultValue={mockData.passportDetail.dateOfIssue}
            />
          </div>

          <div>
            <label htmlFor="dateOfExpire">Date of Expire</label>
            <input
              type="date"
              id="dateOfExpire"
              defaultValue={mockData.passportDetail.dateOfExpire}
            />
          </div>
        </div>

        <h3>Application Detail</h3>
        <div className="formSection">
          <div>
            <label htmlFor="nationality">Nationality</label>
            <Select
              options={countryList().getData()}
              value={nationality}
              onChange={setNationality}
            />
          </div>

          <div>
            <label htmlFor="religion">Religion</label>
            <input
              type="text"
              id="religion"
              defaultValue={mockData.applicationDetail.religion}
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              defaultValue={mockData.applicationDetail.dateOfBirth}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              defaultValue={mockData.applicationDetail.age}
            />
          </div>

          <div>
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input
              type="text"
              id="placeOfBirth"
              defaultValue={mockData.applicationDetail.placeOfBirth}
            />
          </div>

          <div>
            <label htmlFor="homeAddress">Home Address</label>
            <input
              type="text"
              id="homeAddress"
              defaultValue={mockData.applicationDetail.homeAddress}
            />
          </div>

          <div>
            <label htmlFor="contactNo">Contact No.</label>
            <input
              type="tel"
              id="contactNo"
              defaultValue={mockData.applicationDetail.contactNo}
            />
          </div>

          <div>
            <label htmlFor="children">Children</label>
            <input
              type="number"
              id="children"
              defaultValue={mockData.applicationDetail.children}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              defaultValue={mockData.applicationDetail.weight}
            />
          </div>

          <div>
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              defaultValue={mockData.applicationDetail.height}
            />
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
            <div>
              <label htmlFor={`country-${index}`}>
                <b>{exp.id}.</b> Country
              </label>
              <input
                type="text"
                id={`country-${index}`}
                defaultValue={mockData.workExperiences[index]?.country || ""}
              />
            </div>

            <div>
              <label htmlFor={`position-${index}`}>Position</label>
              <Select
                defaultValue={{
                  value:
                    mockData.workExperiences[index]?.position || "houseMaid",
                  label: "House Maid",
                }}
                options={[
                  { value: "houseMaid", label: "House Maid" },
                  { value: "babysitter", label: "Babysitter" },
                  { value: "cooker", label: "Cooker" },
                  { value: "driver", label: "Driver" },
                  { value: "others", label: "Others" },
                ]}
              />
            </div>

            <div>
              <label htmlFor={`others-${index}`}>Others</label>
              <input
                type="text"
                id={`others-${index}`}
                defaultValue={mockData.workExperiences[index]?.others || ""}
              />
            </div>

            <div>
              <label htmlFor={`duration-${index}`}>Duration (years)</label>
              <input
                type="number"
                id={`duration-${index}`}
                defaultValue={mockData.workExperiences[index]?.duration || 0}
              />
            </div>
          </div>
        ))}

        <h3>Language & Skills</h3>
        <div className="formSection">
          <div>
            <label>Languages</label>
            <div className="checkboxGroup">
              <div>
                <input
                  type="checkbox"
                  id="english"
                  defaultChecked={mockData.languageSkills.languages.english}
                />
                <label htmlFor="english">English</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="arabic"
                  defaultChecked={mockData.languageSkills.languages.arabic}
                />
                <label htmlFor="arabic">Arabic</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="otherLanguages"
                  defaultChecked={
                    mockData.languageSkills.languages.otherLanguages
                  }
                />
                <label htmlFor="otherLanguages">Others</label>
              </div>
            </div>
          </div>
          <div>
            <label>Skills</label>
            <div className="checkboxGroup">
              <div>
                <input
                  type="checkbox"
                  id="cleaning"
                  defaultChecked={mockData.languageSkills.skills.cleaning}
                />
                <label htmlFor="cleaning">Cleaning</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="washing"
                  defaultChecked={mockData.languageSkills.skills.washing}
                />
                <label htmlFor="washing">Washing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ironing"
                  defaultChecked={mockData.languageSkills.skills.ironing}
                />
                <label htmlFor="ironing">Ironing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="cooking"
                  defaultChecked={mockData.languageSkills.skills.cooking}
                />
                <label htmlFor="cooking">Cooking</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="babySitting"
                  defaultChecked={mockData.languageSkills.skills.babySitting}
                />
                <label htmlFor="babySitting">Baby Sitting</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="childrenCare"
                  defaultChecked={mockData.languageSkills.skills.childrenCare}
                />
                <label htmlFor="childrenCare">Children Care</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="elderCare"
                  defaultChecked={mockData.languageSkills.skills.elderCare}
                />
                <label htmlFor="elderCare">Elder Care</label>
              </div>
            </div>
          </div>
        </div>

        {!isReception && (
          <div className="formSection">
            <h3>Medical Information</h3>
            <div>
              <label htmlFor="medicalInfo">Upload Medical Information</label>
              <input
                type="file"
                id="medicalInfo"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        )}

        {/* More section */}
        <div className="formSection grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="remarks">Remarks</label>
            <textarea
              id="remarks"
              style={{
                border: "1px solid #000",
                width: "100%",
                height: "100px",
              }}
              defaultValue={mockData.additionalInfo.remarks}
            ></textarea>
          </div>

          <div>
            <label htmlFor="nameSignature">Name & Signature</label>
            <input
              type="text"
              id="nameSignature"
              defaultValue={mockData.additionalInfo.nameSignature}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="formSection">
          <div>
            <label htmlFor="submitTo">Submit To</label>
            <Select
              defaultValue={{
                value: mockData.submit.submitTo,
                label: mockData.submit.submitTo,
              }}
              options={[
                { value: "Admin", label: "Admin" },
                { value: "Manager", label: "Manager" },
              ]}
            />
          </div>
          <button
            type="submit"
            className="submitBtn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Application
          </button>
          <button
            type="button"
            onClick={() => popupHandle({ successResponse: false })}
            className="cancelBtn bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Cancel Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
