import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form.js";
import AlertMessage from "./components/alertMessage.js";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !queryType || !message || !consent) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSuccessMessage(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setConsent(false);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <main className="form-container">
      <h2>Contact Us</h2>

      {successMessage && <AlertMessage message="Form submitted successfully!" />}

      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        queryType={queryType}
        message={message}
        consent={consent}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setQueryType={setQueryType}
        setMessage={setMessage}
        setConsent={setConsent}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default App;
