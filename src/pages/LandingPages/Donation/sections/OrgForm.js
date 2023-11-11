import React, { useState } from "react"  ;
import { TextField, Button, Container, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";

const CheckboxStyle = {
  display: "flex",
  justifyContent: "space-around", 
};

function OrgForm() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [question1Checked, setQuestion1Checked] = useState(false);
  const [question2Checked, setQuestion2Checked] = useState(false);
  const [question3Checked, setQuestion3Checked] = useState(false);


  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };
  
  const handleAdditionalNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };

  const handleQuestion1Change = (event) => {
    setQuestion1Checked(event.target.checked);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2Checked(event.target.checked);
  };

  const handleQuestion3Change = (event) => {
    setQuestion3Checked(event.target.checked);
  };

  const handleDonationSubmit = () => {
    console.log(`Donated: $${donationAmount}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Additional Notes: ${additionalNotes}`);
    console.log(`Annually Checked: ${question1Checked}`);
    console.log(`Monthly Checked: ${question2Checked}`);
    console.log(`One-time Checked: ${question3Checked}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        Donate
      </Typography>

     <div>
     <Typography>Enter Organisaton/Company Name:</Typography>
      <Box m={1}>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={handleFirstNameChange}
          fullWidth
        />
      </Box>
      </div>
      
      <div>
      <Typography>Enter your Email Address:</Typography>
      <Box m={1}>
        <TextField
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
      </Box>
      </div>
      <div>
      <Typography>Enter your Contact Number:</Typography>
      <Box m={1}>
        <TextField
         label="Contact Number"
         variant="outlined"
         value={contactNumber}
         onChange={handleContactNumberChange}
         fullWidth
         />
      </Box>
      </div>

      <div>
      <Typography > Please select your preferred donation frequency:</Typography>
      <div style={CheckboxStyle}>
      
      <Box m={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={question1Checked}
              onChange={handleQuestion1Change}
              name="question1"
              color="primary"
            />
          }
          label="Annually"
        />
      </Box>
      <Box m={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={question2Checked}
              onChange={handleQuestion2Change}
              name="question2"
              color="primary"
            />
          }
          label="Monthly"
        />
      </Box>
      <Box m={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={question3Checked}
              onChange={handleQuestion3Change}
              name="question3"
              color="primary"
            />
          }
          label="One-time"
        />
      </Box>
      </div>
      </div>
      <div>
      <Typography>Additional Notes (Optional):</Typography>
      <Box m={1}>
        <TextField
          label="Additional Notes"
          variant="outlined"
          value={additionalNotes}
          onChange={handleAdditionalNotesChange}
          fullWidth
          multiline
          rows={4}
        />
      </Box>
      </div>
      <div>
      <Typography>Enter your Donation Amount (in your local currency):</Typography>
      <Box m={1}>
        <TextField
          label="Donation Amount"
          variant="outlined"
          type="number"
          value={donationAmount}
          onChange={handleDonationChange}
          fullWidth
        />
      </Box>
      </div>
      <Box m={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ backgroundColor: 'primary', color: 'white' }}
          onClick={handleDonationSubmit}
          fullWidth
        >
          Donate
        </Button>
      </Box>
    </Container>
  );
}

export default OrgForm;









