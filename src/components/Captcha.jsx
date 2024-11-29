import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptcha = (token) => {
    if (token) {
      console.log("reCAPTCHA Token:", token);
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      alert("Form submitted successfully!");
    } else {
      alert("Please complete the reCAPTCHA!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Google reCAPTCHA in Vite</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div style={{ margin: "20px 0" }}>
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY" // Replace with your Site Key
            onChange={handleRecaptcha}
          />
        </div>
        <button type="submit" disabled={!isVerified}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
