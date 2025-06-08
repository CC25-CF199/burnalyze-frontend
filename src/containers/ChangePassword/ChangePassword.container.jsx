import { Box, Typography, IconButton, TextField, Button, Card, Divider } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Image } from '../../components/atoms';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const ChangePasswordContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleChangePassword = () => {
    // Handle password change logic here
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
      {/* Top Navigation Bar */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
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

      {/* Page Title */}
      <Box sx={{ px: 2, py: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#222222',
            mb: 2
          }}
        >
          Change Password
        </Typography>
        
        {/* Divider */}
        <Divider sx={{ borderColor: '#eeeeee', mb: 2 }} />
      </Box>

      {/* Form Section */}
      <Box sx={{ px: 2 }}>
        <Card
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            p: 2,
            mb: 2
          }}
        >
          {/* New Password Field */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: '#555555',
                mb: 0.5,
                pl: 0.5
              }}
            >
              New Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange('newPassword')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#cccccc'
                  },
                  '&:hover fieldset': {
                    borderColor: '#00c3ff'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00c3ff'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '10px 12px',
                  fontSize: '0.9rem',
                  color: '#333333'
                }
              }}
              placeholder="Enter new password"
            />
          </Box>

          {/* Confirm Password Field */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: '#555555',
                mb: 0.5,
                pl: 0.5
              }}
            >
              Confirm Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#cccccc'
                  },
                  '&:hover fieldset': {
                    borderColor: '#00c3ff'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00c3ff'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '10px 12px',
                  fontSize: '0.9rem',
                  color: '#333333'
                }
              }}
              placeholder="Confirm new password"
            />
          </Box>

          {/* Cancel Button */}
          <Button
            onClick={handleCancel}
            variant="outlined"
            sx={{
              color: '#00c3ff',
              borderColor: '#00c3ff',
              borderWidth: '1.5px',
              fontWeight: 500,
              py: 1.5,
              borderRadius: '8px',
              mb: 1.5,
              '&:hover': {
                borderColor: '#00b3e6',
                backgroundColor: 'rgba(0, 195, 255, 0.04)',
                borderWidth: '1.5px'
              },
              textTransform: 'none',
              fontSize: '1rem'
            }}
            fullWidth
          >
            Cancel
          </Button>

          {/* Change Password Button */}
          <Button
            onClick={handleChangePassword}
            sx={{
              backgroundColor: '#00c3ff',
              color: '#ffffff',
              fontWeight: 600,
              py: 1.5,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#00b3e6'
              },
              textTransform: 'none',
              fontSize: '1rem'
            }}
            fullWidth
          >
            Change Password
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default ChangePasswordContainer; 