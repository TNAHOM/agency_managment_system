import React from "react";
import { formData } from "@/server/mockData";
import FormList from "@/components/FormList";
import Filter from "@/components/Filter";
import Search from "@/components/Search";

const StatusTracker = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <Search />
        <Filter />
      </div>
      <FormList formData={formData} headerTitle="All forms overview" />
    </div>
  );
};

export default StatusTracker;
