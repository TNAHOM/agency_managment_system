"use client";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import PopupForm from "../popUp/PopupForm";
import ResponseStatus from "../popUp/ResponseStatus";

const Add = () => {
  const [ispopup, setIsPopup] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const popupHandle = ({
    successResponse,
  }: {
    successResponse: boolean | null;
  }) => {
    if (successResponse === null) {
      setIsPopup(true);
    } else if (successResponse === false) {
      setIsPopup(false);
    } else {
      setIsPopup(false);
      setStatus(successResponse);
    }
  };
  return (
    <>
      <button
        className="flex gap-2 items-center rounded-sm"
        onClick={() => popupHandle({ successResponse: null })}
      >
        <CirclePlus size={32} />
        <p className="font-bold text-xl">Add New Form</p>
      </button>

      {ispopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg p-8 w-3/5 h-3/4 overflow-y-auto">
            <PopupForm popupHandle={popupHandle} />
          </div>
        </div>
      )}
      {status && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <ResponseStatus
            success={true}
            message="Form submitted successfully"
          />
        </div>
      )}
    </>
  );
};

export default Add;
