import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, Button, CircularProgress } from '@mui/material';
import { Camera, Refresh, Psychology } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import dataURLtoFile from '../../../utils/dataURLtoFile';
import generateRandomFilename from '../../../utils/generateRandonFilename';
import { callDetectionAPI, setUserImage } from '../../../redux/detection';

const CameraComponent = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const isCallLoading = useSelector(state => state.detection.loading);
  const camRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const capture = useCallback(async () => {
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
        position: 'relative',
        width: 'fit-content',
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
            mirrored={true}
            style={{
              opacity: isLoading ? 0.5 : 1,
              borderRadius: '8px',
            }}
          />
          <Button
            variant="contained"
            onClick={capture}
            startIcon={<Camera />}
            disabled={isLoading}
            sx={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              color: '#FFF',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: 3,
              zIndex: 1,
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
              maxHeight: '100%',
              borderRadius: '8px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              color: '#FFF',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: 3,
              zIndex: 1,
            }}
          >
            <Button
              variant="contained"
              onClick={retake}
              startIcon={<Refresh />}
              sx={{
                width: '100%',
                color: '#FFF',
                fontWeight: 600,
                boxShadow: 0,
              }}
            >
              Ambil Ulang
            </Button>
            <Button
              variant="contained"
              onClick={handleUploadImage}
              startIcon={<Psychology />}
              loading={isCallLoading}
              sx={{
                width: '100%',
                color: '#FFF',
                fontWeight: 600,
                boxShadow: 0,
              }}
            >
              Analisa Gambar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CameraComponent;
