import React, { useState, useEffect } from "react";
import "./App.css";

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

      {successMessage && (
        <section className="alert">Form submitted successfully!</section>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset className="name-container">
          <div>
            <label htmlFor="first-name">First Name *</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="last-name">Last Name *</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <section>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>

        <fieldset className="radio-group">
          <legend>Query Type *</legend>
          <label>
            <input
              type="radio"
              name="query"
              value="general"
              checked={queryType === "general"}
              onChange={(e) => setQueryType(e.target.value)}
              required
            />
            General Enquiry
          </label>
          <label>
            <input
              type="radio"
              name="query"
              value="support"
              checked={queryType === "support"}
              onChange={(e) => setQueryType(e.target.value)}
              required
            />
            Support Request
          </label>
        </fieldset>

        <section>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </section>

        <section className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
          />
          <label htmlFor="consent">
            I consent to being contacted by the team *
          </label>
        </section>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;
