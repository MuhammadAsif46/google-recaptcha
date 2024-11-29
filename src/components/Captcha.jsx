import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptcha = (token) => {
    if (token) {
      console.log("reCAPTCHA Token:", token); // Token console pe show hoga
      setRecaptchaToken(token); // Token ko state mein store karna
      setIsVerified(true);
    } else {
      setRecaptchaToken("");
      setIsVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      // Form submit karne ke liye token send karna
      console.log("Form submitted with token:", recaptchaToken);
      alert("Form submitted successfully!");
    } else {
      alert("Please complete the reCAPTCHA!");
    }
  };

  return (
    <div>
      <h1>Google reCAPTCHA Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6LcHrI0qAAAAANdHzEzaS59cJQFboR4dmgECfFr9" // Apna Site Key yahan daalna
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

// sitekey = "6LcHrI0qAAAAANdHzEzaS59cJQFboR4dmgECfFr9"; // Replace with your Site Key
