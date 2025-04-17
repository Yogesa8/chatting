import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileNumber from "./component/MobileNumber";
import StartingPage from "./component/StartingPage";
import OtpVerification from "./component/OtpVerification";
import HomePage from "./component/HomePage";
import Setting from "./component/page/Setting";

const App = () => {
  return (
    <div className="App" data-barba="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/mobile" element={<MobileNumber />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
