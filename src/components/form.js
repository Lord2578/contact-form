// components/Form.js
import React from "react";
import InputField from "./inputField";
import RadioGroup from "./radioGroup";
import TextArea from "./textArea";
import Checkbox from "./checkBox";

const Form = ({
  firstName,
  lastName,
  email,
  queryType,
  message,
  consent,
  setFirstName,
  setLastName,
  setEmail,
  setQueryType,
  setMessage,
  setConsent,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="name-container">
        <InputField
          label="First Name *"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <InputField
          label="Last Name *"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </fieldset>

      <InputField
        label="Email Address *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />

      <RadioGroup
        legend="Query Type *"
        options={[
          { label: "General Enquiry", value: "general" },
          { label: "Support Request", value: "support" },
        ]}
        value={queryType}
        onChange={setQueryType}
      />

      <TextArea
        label="Message *"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <Checkbox
        label="I consent to being contacted by the team *"
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
