import { Box } from '@mui/material';

import { CameraComponent } from '../../components/atoms';
import { Card } from '../../components/molecules';

const CameraContainer = () => {
  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: { xs: 'space-evenly', lg: 'space-between' },
      }}
    >
      <CameraComponent />
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian tubuh yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </Box>
  );
};

export default CameraContainer;
