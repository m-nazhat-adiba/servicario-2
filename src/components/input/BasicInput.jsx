import React from "react";

const BasicInput = ({
  label,
  placeholder,
  type = "input",
  handleChange,
  id,
}) => {
  const inputProps = handleChange;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        onChange={inputProps.onChange}
        value={inputProps.data}
        id={id}
        type={type}
        className="px-4 py-2 bg-white border-2 border-gray-100"
        placeholder={placeholder}
      />
      <p className="hidden">Placeholder Note</p>
    </div>
  );
};

export default BasicInput;
