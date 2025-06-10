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
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: { xs: 2, sm: 0 },
        gap: 1,
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
