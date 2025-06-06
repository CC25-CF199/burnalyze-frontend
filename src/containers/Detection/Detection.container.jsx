import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

import { DragFileUploadComponent } from '../../components/atoms';
import { Card } from '../../components/molecules';
import { DetectionHeader } from '../../components/organisms';

const DetectionContainer = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUploadImage = () => {
    const fd = new FormData();
    fd.append('wound-img', uploadedImage);

    // API call here
  };

  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <DetectionHeader />
      <Button
        component={NavLink}
        to="/camera"
        variant="contained"
        startIcon={<PhotoCamera />}
        sx={{
          width: '100%',
          color: '#FFF',
          fontWeight: 600,
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        Ambil Gambar
      </Button>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        Atau
      </Typography>
      <DragFileUploadComponent
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        onUploadImage={handleUploadImage}
      />
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian kulit yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </Box>
  );
};

export default DetectionContainer;
