import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptcha = (token) => {
    if (token) {
      // console.log("reCAPTCHA Token:", token); // Token console pe show hoga
      setRecaptchaToken(token); // Token ko state mein store karna
      setIsVerified(true); // reCAPTCHA verified hone par "True" set karna
    } else {
      setRecaptchaToken("");
      setIsVerified(false); // Agar token nahi hai toh "False" set karna
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      // Form submit karne ke liye token send karna
      // console.log("Form submitted with token:", recaptchaToken);
      Swal.fire({
        icon: "success",
        title: "Form submitted successfully!",
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please complete the reCAPTCHA!",
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1>Google ReCaptcha Example</h1>

      {/* reCAPTCHA Component */}
      <div className="captcha-center">
        <ReCAPTCHA
          sitekey="6LcqrI0qAAAAAEyaXXSmLB0Jjugqos80BxQfhi6Y" // Apna Site Key yahan daalna
          onChange={handleRecaptcha}
        />
      </div>

      {/* Dynamic Display of Verification Status */}
      <div>
        <h3>ReCaptcha Status: {isVerified ? "True" : "False"}</h3>
      </div>

      {/* Submit Button */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
