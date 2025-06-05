import { Box } from '@mui/material';

import { FileUploadComponent, CameraComponent } from '../../components/atoms';
import { Card } from '../../components/molecules';
import { DetectionHeader } from '../../components/organisms';

const DetectionContainer = () => {
  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DetectionHeader />
      <CameraComponent />
      <FileUploadComponent />
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian kulit yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </Box>
  );
};

export default DetectionContainer;
