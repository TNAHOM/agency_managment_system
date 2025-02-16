import React from "react";
import Add from "./Buttons/Add";

const Filter = () => {
  return (
    <div className="w-[600px] flex gap-6  p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
        Filter By Status:
      </h3>
      <ul className="my- space-y-1">
        {[
          { label: "Pending", value: "pending", icon: "Clock" },
          { label: "Completed", value: "completed", icon: "CheckCircle" },
          { label: "In Progress", value: "inProgress", icon: "Loader2" },
        ].map((item) => (
          <li key={item.value}>
            <div className="flex items-center pl-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id={`checkbox-${item.value}`}
                type="checkbox"
                value={item.value}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`checkbox-${item.value}`}
                className="w-full py-1 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <Add />
    </div>
  );
};

export default Filter;
