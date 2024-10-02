import React from "react";

const RadioGroup = ({ legend, options, value, onChange }) => (
  <fieldset className="radio-group">
    <legend>{legend}</legend>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          name="query"
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
        {option.label}
      </label>
    ))}
  </fieldset>
);

export default RadioGroup;
