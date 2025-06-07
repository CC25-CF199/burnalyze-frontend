import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { UploadFileComponent } from '../../components/molecules';
import { Card } from '../../components/molecules';
import { DetectionHeader } from '../../components/organisms';
import { callDetectionAPI, setUserImage } from '../../redux/detection';
import fileToDataURL from '../../utils/fileToDataURL';

const DetectionContainer = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const isCallLoading = useSelector(state => state.detection.loading);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUploadImage = async () => {
    try {
      const imgSrc = await fileToDataURL(uploadedImage);
      const fd = new FormData();
      fd.append('wound-img', uploadedImage);

      await dispatch(callDetectionAPI(fd)).unwrap();
      dispatch(setUserImage(imgSrc));

      navigateTo('result');
    } catch (error) {
      console.error(error.message);
    }
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: { lg: 'space-around' },
          gap: 2,
        }}
      >
        <Button
          component={NavLink}
          to="camera"
          variant="contained"
          startIcon={<PhotoCamera />}
          disabled={uploadedImage}
          sx={{
            width: { xs: '100%', lg: 'auto' },
            minWidth: { lg: '200px' },
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
        <UploadFileComponent
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
          handleUploadImage={handleUploadImage}
          isCallLoading={isCallLoading}
        />
      </Box>
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian tubuh yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </Box>
  );
};

export default DetectionContainer;
