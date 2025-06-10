import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Card,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Image } from '../../components/atoms';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const ChangePasswordContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleChangePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Change password:', formData);
    navigate('/settings');
  };

  const handleCancel = () => {
    navigate('/settings');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Full Width Navbar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          py: 2,
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <IconButton>
          <MenuIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        <Image src={burnalyzeLogo} type="landingLogo" />
        <Box sx={{ width: 40 }} />
      </Box>

      {/* Content */}
      <Box sx={{ maxWidth: 700, mx: 'auto', px: 2.5, py: 3 }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#222222',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Change Password
        </Typography>

        <Divider sx={{ borderColor: '#eeeeee', mb: 3 }} />

        {/* Form Card */}
        <Card
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            p: 3,
          }}
        >
          {/* New Password */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: '#555555',
                mb: 0.5,
              }}
            >
              New Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange('newPassword')}
              placeholder="Enter new password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#cccccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00c3ff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00c3ff',
                  },
                },
                '& .MuiInputBase-input': {
                  padding: '10px 12px',
                  fontSize: '0.9rem',
                  color: '#333333',
                },
              }}
            />
          </Box>

          {/* Confirm Password */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: '#555555',
                mb: 0.5,
              }}
            >
              Confirm Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              placeholder="Confirm new password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#cccccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00c3ff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00c3ff',
                  },
                },
                '& .MuiInputBase-input': {
                  padding: '10px 12px',
                  fontSize: '0.9rem',
                  color: '#333333',
                },
              }}
            />
          </Box>

          {/* Cancel Button */}
          <Button
            onClick={handleCancel}
            variant="outlined"
            fullWidth
            sx={{
              color: '#00c3ff',
              borderColor: '#00c3ff',
              borderWidth: '1.5px',
              fontWeight: 500,
              py: 1.5,
              borderRadius: '12px',
              mb: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                borderColor: '#00b3e6',
                backgroundColor: 'rgba(0, 195, 255, 0.04)',
              },
            }}
          >
            Cancel
          </Button>

          {/* Submit Button */}
          <Button
            onClick={handleChangePassword}
            fullWidth
            sx={{
              backgroundColor: '#00c3ff',
              color: '#ffffff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#00b0e6',
              },
            }}
          >
            Change Password
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default ChangePasswordContainer;
