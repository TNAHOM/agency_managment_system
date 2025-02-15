import React from "react";
import { ResponseStatusProps } from "../../lib/interface/ResponseStatus";

const ResponseStatus = ({ success, message }: ResponseStatusProps) => {
  return (
    <div>
      <div
        className={`${
          success ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"
        } border border-green-400 rounded px-4 py-3 mb-3`}
        role="alert"
      >
        <strong className="font-bold">{success ? "Success!" : "Error!"}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  );
};

export default ResponseStatus;
