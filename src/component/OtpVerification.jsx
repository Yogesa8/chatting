import React, { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber;
  const phonecode = location.state?.country;
  console.log(mobileNumber, phonecode);

  const handleChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 4);
    setOtp(numericValue);

    if (numericValue === "0000") {
      navigate("/home");
    }
  };

  function handleNumber(event) {
    if (
      isNaN(parseInt(event.key)) &&
      event.key !== "Backspace" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      event.preventDefault();
    }
  }

  return (
    <React.Fragment>
      <div data-barba="container" className="Otp">
        <div className="otp__inner">
          <p>
            Please type the verification code sent to +{phonecode}-
            {mobileNumber}
          </p>
          <OTPInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            renderSeparator={<span style={{ margin: "0 2px" }}></span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "2rem",
              height: "2.5rem",
              margin: "4px",
              fontSize: "1rem",
              borderRadius: 4,
              border: "1px solid #ff7f82",
              marginBottom: "10px",
              background: "transparent",
            }}
            onKeyDown={handleNumber}
          />
          <a href="#" className="mobile_verification">
            Verification via Call
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtpVerification;
