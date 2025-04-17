import { Power3, Power4, TimelineMax } from "gsap/gsap-core";
import { TweenMax } from "gsap/gsap-core";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const MobileNumber = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  // Handle country selection change
  const handleCountryChange = (_country) => {
    setCountry(_country);
    // console.log("Selected Country:", _country);
  };

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  };

  const handleSubmit = () => {
    if (country && inputValue.length === 10) {
      navigate("/otp", {
        state: {
          mobileNumber: `${inputValue}`,
          country: country.phone_code,
        },
      });
    }
  };
  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" className="Contact">
        <div ref={(el) => (body = el)} className="Headd">
          <h1>Enter your mobile number</h1>
          <p>
            Chat will need to verify your phone number. Carrier charges may
            apply. <a href="!#">What's my number?</a>
          </p>
          <div className="login__middle">
            <CountrySelect
              containerClassName="form-group"
              inputClassName=""
              onChange={handleCountryChange}
              placeHolder="Select Country"
            />
            <div className="login__mobile">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Mobile no"
                maxLength={10}
              />
            </div>
          </div>
          <button
            className="button"
            onClick={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            tabIndex={0}
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNumber;
