import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, Button, CircularProgress } from '@mui/material';
import { Camera, Refresh } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import dataURLtoFile from '../../../utils/dataURLtoFile';
import generateRandomFilename from '../../../utils/generateRandonFilename';
import { callDetectionAPI, setUserImage } from '../../../redux/detection';

const CameraComponent = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const isCallLoading = useSelector(state => state.detection.loading);
  const camRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const capture = useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    setImgSrc(imageSrc);

    const filename = generateRandomFilename();
    const imageFile = dataURLtoFile(imageSrc, filename);
    setUploadedImage(imageFile);
  }, [camRef]);

  const retake = useCallback(() => {
    setIsLoading(true);
    setImgSrc(null);
  }, []);

  const handleUserMedia = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleUploadImage = async () => {
    try {
      const fd = new FormData();
      fd.append('wound-img', uploadedImage);

      await dispatch(callDetectionAPI(fd)).unwrap();
      dispatch(setUserImage(imgSrc));
      navigateTo('/detection/result');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {!imgSrc ? (
        <>
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <Webcam
            audio={false}
            ref={camRef}
            screenshotFormat="image/jpeg"
            onUserMedia={handleUserMedia}
            style={{ opacity: isLoading ? 0.5 : 1 }}
          />
          <Button
            variant="contained"
            onClick={capture}
            startIcon={<Camera />}
            disabled={isLoading}
            sx={{
              width: '100%',
              color: '#FFF',
              fontWeight: 600,
              borderRadius: '0 0 8px 8px',
              boxShadow: 3,
            }}
          >
            Ambil Foto
          </Button>
        </>
      ) : (
        <>
          <img
            src={imgSrc}
            alt="captured"
            style={{
              maxWidth: '100%',
              borderRadius: '8px 8px 0 0',
            }}
          />
          <Button
            variant="contained"
            onClick={retake}
            startIcon={<Refresh />}
            sx={{
              width: '100%',
              color: '#FFF',
              borderRadius: '0 0 8px 8px',
              boxShadow: 3,
              mb: 2,
            }}
          >
            Ambil Ulang
          </Button>
          <Button
            variant="contained"
            onClick={handleUploadImage}
            loading={isCallLoading}
            sx={{
              width: '100%',
              color: '#FFF',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: 3,
            }}
          >
            Analisa Gambar
          </Button>
        </>
      )}
    </Box>
  );
};

export default CameraComponent;
