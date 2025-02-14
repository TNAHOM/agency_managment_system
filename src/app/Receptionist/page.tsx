import FormList from "@/components/FormList";
import { formData } from "@/server/mockData";
import Search from "@/components/Search";
import React from "react";
import Add from "@/components/Buttons/Add";

const Receptionist = () => {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8 flex justify-between">
        <Search />
        <Add />
      </div>

      <FormList formData={formData} headerTitle="Recently Created" />
    </div>
  );
};

export default Receptionist;
