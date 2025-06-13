import { Box, Button } from '@mui/material';
import { Logout, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../redux/auth';

const UserProfileButtons = ({ isCallLoading, onModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error(error);
      message.error(error);
    }
  };

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
        onClick={handleLogout}
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
