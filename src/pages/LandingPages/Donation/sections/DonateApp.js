import React from "react";
import FaqSection from ".//Faqsection";
import Start from ".//Start";

const containerStyle = {
  padding:"40px", 
  justifyContent: "center",
  alignItems: "center",
};
const componentStyle = {
  marginTop:"60px", 
};

function DonateApp() {
  return (
    <div style={containerStyle}>
      <div style={componentStyle}>
        <Start />
      </div>
      <div style={componentStyle}>
        <FaqSection />
      </div>
    </div>
  );
}

export default DonateApp;
