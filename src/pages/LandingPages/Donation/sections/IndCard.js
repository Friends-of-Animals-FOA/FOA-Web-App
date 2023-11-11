import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IndForm from './IndForm';

const IndCard = ({title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 300, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          alt="Image"
          height="140"
          width="50"
          
          image="https://img.freepik.com/free-photo/side-view-person-holding-dog-s-paw_23-2148683017.jpg?size=626&ext=jpg&ga=GA1.1.1357067277.1699362632&semt=ais"
        />
        <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
          <Button variant="contained" onClick={handleOpenModal} style={{ backgroundColor: 'primary', color: 'white' }}  size="small">
            Donate
          </Button>
        </CardContent>
      </Card>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          position: 'relative',
          maxHeight: '80vh',
          overflowY: 'auto',
          borderRadius: '4px',
        }}>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              
            }}
            onClick={handleCloseModal}
          >
            &#215;
          </button>
          <IndForm />
        </div>
      </Modal>
    </div>
  );
};

export default IndCard;




