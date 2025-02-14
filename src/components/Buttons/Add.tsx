"use client";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import PopupForm from "../PopupForm";

const Add = () => {
  const [ispopup, setIsPopup] = useState(false);

  const popupHandle = () => {
    setIsPopup(!ispopup);
  };
  return (
    <>
      <button
        className="flex gap-2 items-center rounded-sm"
        onClick={popupHandle}
      >
        <CirclePlus size={32} />
        <p className="font-bold text-xl">Add New Form</p>
      </button>

      {ispopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg p-8 w-3/5 h-3/4 overflow-y-auto">
            <PopupForm popupHandle={popupHandle}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
