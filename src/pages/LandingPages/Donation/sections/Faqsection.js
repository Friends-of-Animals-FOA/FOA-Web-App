import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How will my donation be used?",
    answer: "Your donation directly supports the care and welfare of animals. It helps provide food, shelter, medical care, and rescue operations for animals in need."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, your donation is tax-deductible. We are a registered non-profit organization, and you will receive a tax-deductible receipt for your contribution."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including credit/debit cards, PayPal, and bank transfers, making it convenient for you to contribute."
  },
  {
    question: "Can I choose where my donation goes, such as a specific project or animal rescue mission?",
    answer: "Yes, you can allocate your donation to a specific cause or project if you wish. We offer options for designating your support."
  },
  {
    question: 'Can I volunteer or get involved in other ways besides donating?',
    answer: 'Absolutely! In addition to monetary support, we welcome volunteers, foster families, and other forms of involvement. Check out our "Get Involved" section for more information on how you can contribute your time and skills to our cause.'
  },
  {
    question: "Is my online donation secure?",
    answer: "Yes, we prioritize the security of your online transactions. Our donation page uses industry-standard encryption to ensure that your personal information is protected. You can confidently make your donation knowing that your data is secure."
  },
];

function Faqsection() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const faqContainerStyle = {
    width: "80%",
    maxWidth: "600px",
    textAlign: "left",  
    padding: "40px",
  };

  return (
    <div style={containerStyle}>
      <div className="faq-container" style={faqContainerStyle}>
        <div className="faqs">
        <Typography variant="h4" gutterBottom style={{ color: 'primary', fontSize:"27px" }}>
             Some Frequently Asked questions:
            </Typography>
        </div>
        {faqData.map((item, index) => (
          <Accordion key={index} style={{ marginBottom: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`}
            >
              <Typography variant="h6" style={{ fontSize: "16px", color: "grey" }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "16px" }}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Faqsection;


