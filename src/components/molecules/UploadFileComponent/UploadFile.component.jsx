import { Box, Button } from '@mui/material';

import { DragFileUploadComponent } from '../../atoms';

const UploadFile = ({
  uploadedImage,
  setUploadedImage,
  handleUploadImage,
  isCallLoading,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <DragFileUploadComponent
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        onUploadImage={handleUploadImage}
      />
      <Button
        variant="contained"
        onClick={handleUploadImage}
        disabled={!uploadedImage}
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
    </Box>
  );
};

export default UploadFile;
