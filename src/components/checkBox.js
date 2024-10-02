import React from "react";

const CheckBox = ({ label, checked, onChange, required = false }) => (
  <section className="checkbox-container">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      required={required}
    />
    <label>{label}</label>
  </section>
);

export default CheckBox;
