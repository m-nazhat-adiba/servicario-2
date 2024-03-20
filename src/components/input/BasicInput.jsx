import React from "react";

const BasicInput = ({ label, placeholder, type = "input" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="input_1" className="mb-2">
        {label}
      </label>
      <input
        id="input_1"
        type={type}
        className="px-4 py-2 bg-white border-2 border-gray-100"
        placeholder={placeholder}
      />
      <p className="hidden">Placeholder Note</p>
    </div>
  );
};

export default BasicInput;
