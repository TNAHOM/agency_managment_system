import React from "react";
import { User } from "lucide-react";
import { FormDataInterface } from "@/lib/interface/UserInterface";

const FormList = ({
  formData,
  headerTitle,
}: {
  formData: FormDataInterface[];
  headerTitle: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold p-6 border-b">{headerTitle}</h2>

      <div className="p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-4">Personal Photo</th>
              <th className="pb-4">Full Name</th>
              <th className="pb-4">Age</th>
              <th className="pb-4">Passport Number</th>
              <th className="pb-4">File Number</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item: FormDataInterface) => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="py-4">
                  <User />
                </td>
                <td className="py-4">{item.name}</td>
                <td className="py-4">{item.age}</td>
                <td className="py-4">{item.passportNumber}</td>
                <td className="py-4">{item.fileNumber}</td>
                <td className="py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <span role="img" aria-label="edit">
                      ✏️
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormList;
