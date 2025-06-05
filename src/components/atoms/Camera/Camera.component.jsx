import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, Button, CircularProgress } from '@mui/material';
import { PhotoCamera, Camera, Refresh } from '@mui/icons-material';

const CameraComponent = () => {
  const camRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startCamera = useCallback(() => {
    setIsLoading(true);
    setIsCameraOpen(prevState => !prevState);
  }, []);

  const capture = useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setIsCameraOpen(prevState => !prevState);
  }, [camRef, setImgSrc]);

  const retake = useCallback(() => {
    setIsLoading(true);
    setImgSrc(null);
    setIsCameraOpen(true);
  }, []);

  const handleUserMedia = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {!isCameraOpen && !imgSrc && (
        <Button
          variant="contained"
          onClick={startCamera}
          startIcon={<PhotoCamera />}
          sx={{
            width: '100%',
            color: '#FFF',
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: 3,
          }}
        >
          Buka Kamera
        </Button>
      )}
      {isCameraOpen && (
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
      )}
      {imgSrc && (
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
            }}
          >
            Retake Photo
          </Button>
        </>
      )}
    </Box>
  );
};

export default CameraComponent;
