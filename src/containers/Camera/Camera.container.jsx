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
        justifyContent: 'center',
        gap: 1,
        padding: {
          xs: 2,
          sm: '16px 10em 16px 10em',
          md: '16px 18em 16px 18em',
        },
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
