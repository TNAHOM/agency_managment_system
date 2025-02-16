"use client";
import React, { useState } from "react";
// import { User } from "lucide-react";
import { FormDataInterface } from "@/lib/interface/UserInterface";
import PopupForm from "./popUp/PreFilledPopupForm";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FormList = ({
  formData,
  headerTitle,
}: {
  formData: FormDataInterface[];
  headerTitle: string;
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const path = usePathname();
  const statuses = [
    { label: "Pending", bgClass: "bg-yellow-200" },
    { label: "In Progress", bgClass: "bg-blue-200" },
    { label: "Completed", bgClass: "bg-green-200" },
  ];
  return (
    <>
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
                {path === "/Status-Tracker" && <th className="pb-4">Status</th>}
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item: FormDataInterface, index: number) => {
                const status = statuses[index % statuses.length];
                return (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="py-4">
                      <Image
                        src="/assets/applicationImage.png"
                        alt="Personal Photo"
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                      />
                    </td>
                    <td className="py-4">{item.name}</td>
                    <td className="py-4">{item.age}</td>
                    <td className="py-4">{item.passportNumber}</td>
                    <td className="py-4">{item.fileNumber}</td>
                    {path === "/Status-Tracker" && (
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded ${status.bgClass}`}>
                          {status.label}
                        </span>
                      </td>
                    )}
                    <td className="py-4">
                      {path !== "/Receptionist" && (
                        <button
                          onClick={() => setIsPopupVisible(true)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <span role="img" aria-label="edit">
                            ✏️ Edit
                          </span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg p-8 w-3/5 h-3/4 overflow-y-auto">
            <PopupForm
              popupHandle={() => {
                setIsPopupVisible(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FormList;
