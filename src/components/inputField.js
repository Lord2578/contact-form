import React from "react";

const InputField = ({ label, value, onChange, type = "text", required = false }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default InputField;
