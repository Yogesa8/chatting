import { Power3, Power4 } from "gsap";
import { TimelineMax } from "gsap/gsap-core";
import { TweenMax } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const StartingPage = () => {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
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
  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" className="Home">
        <div ref={(el) => (body = el)} className="Headd">
          <div>Welcome to Chat – Let's Talk!</div>
          <NavLink to="/mobile"  className="button">
          Agree and continue
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StartingPage;
