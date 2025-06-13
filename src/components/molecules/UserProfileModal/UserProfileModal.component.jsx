import { Box, Modal, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { deleteUserAccount } from '../../../redux/userProfile';
import { logout } from '../../../redux/auth';

const UserProfileModal = ({ isOpen, handleModal }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCallLoading = useSelector(state => state.userProfile.loading);

  const handleDeleteBtn = async () => {
    try {
      await dispatch(deleteUserAccount(id));
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error(error);
      message.error(error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, md: 400 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          borderRadius: '8px',
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: 'center' }}
        >
          Apakah Anda yakin ingin menghapus akun anda?
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            color="error"
            loading={isCallLoading}
            onClick={handleDeleteBtn}
          >
            Ya
          </Button>
          <Button
            variant="contained"
            onClick={handleModal}
            sx={{ color: 'white', boxShadow: 'none' }}
          >
            Tidak
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UserProfileModal;
