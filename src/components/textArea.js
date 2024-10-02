import React from "react";

const TextArea = ({ label, value, onChange, required = false }) => (
  <section>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} required={required}></textarea>
  </section>
);

export default TextArea;
