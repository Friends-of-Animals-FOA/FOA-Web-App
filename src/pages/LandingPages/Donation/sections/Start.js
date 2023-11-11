import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import IndCard from ".//IndCard"; 
import OrgCard from ".//OrgCard";

const ImageContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px', 
  border:"10px",
});

const ContentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2), 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '40%', 
  fontSize:"10px"
}));

const Start = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <ImageContainer item xs={12} md={6}>
          <img
            src="https://img.freepik.com/premium-vector/hand-depositing-coin-carton-box-hand_18591-12620.jpg?size=626&ext=jpg&ga=GA1.1.1357067277.1699362632&semt=ais"
            alt="Image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </ImageContainer>
        <Grid item xs={12} md={6}>
          <ContentContainer>
            <Typography variant="h4" gutterBottom style={{ color: 'primary' }}>
             Make a Donation
            </Typography>
            <Typography variant="body1" paragraph style={{ fontSize: "16px", color: "grey" }}>
              Your donation makes a world of difference in the lives of animals in need. Join us in
              creating a brighter, more compassionate future.
            </Typography>
            
          </ContentContainer>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={6}>
             <IndCard
               title="Donate as an Individual"
               />
            </Grid>
            <Grid item xs={12} md={6}>
            <OrgCard
              title="Donate as an Organisaton"
             />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Start;
