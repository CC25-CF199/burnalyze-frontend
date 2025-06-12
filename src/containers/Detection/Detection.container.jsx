import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CustomTab, CameraComponent } from '../../components/atoms';
import { UploadFileComponent } from '../../components/molecules';
import { Card } from '../../components/molecules';
import { DetectionHeader } from '../../components/organisms';
import { callDetectionAPI, setUserImage } from '../../redux/detection';
import fileToDataURL from '../../utils/fileToDataURL';

const DetectionContainer = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const isCallLoading = useSelector(state => state.detection.loading);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleUploadImage = async () => {
    try {
      const imgSrc = await fileToDataURL(uploadedImage);
      const fd = new FormData();
      fd.append('wound-img', uploadedImage);

      // Config obj for authenticated request
      const config = {
        headers: isAuth
          ? {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }
          : {},
      };

      await dispatch(callDetectionAPI({ data: fd, config })).unwrap();
      dispatch(setUserImage(imgSrc));

      navigateTo('result');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        height: { xs: '100%', sm: 'fit-content' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: {
          xs: '2em 1em',
          sm: '16px 10em',
          md: '16px 18em',
          lg: '16px 26em',
        },
        gap: { sm: '10px' },
      }}
    >
      <DetectionHeader />
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 1,
            backgroundColor: 'background.paper',
            borderRadius: '12px',
          }}
        >
          <CustomTab
            label="Unggah Gambar"
            selected={activeTab === 0}
            onClick={() => setActiveTab(0)}
          />
          <CustomTab
            label="Ambil Gambar"
            selected={activeTab === 1}
            onClick={() => setActiveTab(1)}
          />
        </Box>

        {/* Tab panels */}
        {activeTab === 0 ? (
          <UploadFileComponent
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
            handleUploadImage={handleUploadImage}
            isCallLoading={isCallLoading}
          />
        ) : (
          <CameraComponent />
        )}
      </Box>
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera perangkat Anda ke bagian tubuh yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </Box>
  );
};

export default DetectionContainer;
