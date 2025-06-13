import { Box, Button } from '@mui/material';
import { Logout, Delete } from '@mui/icons-material';

const UserProfileButtons = ({ isCallLoading, onModal }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Button
        variant="contained"
        disabled={isCallLoading}
        startIcon={<Logout />}
        sx={{ color: 'secondary.main', fontWeight: 600, py: 1 }}
      >
        Logout
      </Button>
      <Button
        variant="outlined"
        color="error"
        disabled={isCallLoading}
        startIcon={<Delete />}
        onClick={onModal}
        sx={{ fontWeight: 600, py: 1 }}
      >
        Hapus Akun
      </Button>
    </Box>
  );
};

export default UserProfileButtons;
