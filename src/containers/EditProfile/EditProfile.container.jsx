import { Box, Typography, IconButton, Avatar, TextField, Button, Card } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { Image } from '../../components/atoms';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const EditProfileContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Save changes:', formData);
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handleChangePhoto = () => {
    // Handle photo change logic here
    console.log('Change photo clicked');
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

      {/* Profile Section with Avatar */}
      <Box
        sx={{
          backgroundColor: '#00c3ff',
          borderRadius: '0 0 16px 16px',
          pt: 3,
          pb: 5,
          textAlign: 'center',
          mb: 2
        }}
      >
        {/* Avatar with Camera Icon */}
        <Box 
          sx={{ 
            position: 'relative', 
            display: 'inline-block',
            cursor: 'pointer',
            mb: 1
          }}
          onClick={handleChangePhoto}
        >
          <Avatar
            sx={{
              width: 72,
              height: 72,
              border: '4px solid white',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
            src="/profile-avatar.jpg"
            alt="Denis Toleransi"
          >
            DT
          </Avatar>
          
          {/* Camera Icon Overlay */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 24,
              height: 24,
              backgroundColor: '#00c3ff',
              border: '2px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CameraAltIcon sx={{ fontSize: 12, color: 'white' }} />
          </Box>
        </Box>

        {/* Change Photo Text */}
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '0.875rem',
            fontWeight: 500,
            mt: 1
          }}
        >
          Change Photo
        </Typography>
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
          {/* Username Field */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: '#666666',
                mb: 0.5,
                pl: 0.5
              }}
            >
              Username
            </Typography>
            <TextField
              fullWidth
              value={formData.username}
              onChange={handleInputChange('username')}
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
                  padding: '8px 12px',
                  fontSize: '0.875rem'
                }
              }}
              placeholder="Enter username"
            />
          </Box>

          {/* First Name and Last Name */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {/* First Name */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: '#666666',
                  mb: 0.5,
                  pl: 0.5
                }}
              >
                First Name
              </Typography>
              <TextField
                fullWidth
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
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
                    padding: '8px 12px',
                    fontSize: '0.875rem'
                  }
                }}
                placeholder="First name"
              />
            </Box>

            {/* Last Name */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: '#666666',
                  mb: 0.5,
                  pl: 0.5
                }}
              >
                Last Name
              </Typography>
              <TextField
                fullWidth
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
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
                    padding: '8px 12px',
                    fontSize: '0.875rem'
                  }
                }}
                placeholder="Last name"
              />
            </Box>
          </Box>
        </Card>

        {/* Action Buttons */}
        {/* Save Changes Button */}
        <Button
          onClick={handleSaveChanges}
          sx={{
            backgroundColor: '#00c3ff',
            color: '#ffffff',
            fontWeight: 600,
            py: 1.5,
            borderRadius: '12px',
            mb: 1.5,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#00b3e6'
            },
            textTransform: 'none',
            fontSize: '1rem'
          }}
          fullWidth
        >
          Save Changes
        </Button>

        {/* Cancel Button */}
        <Button
          onClick={handleCancel}
          variant="outlined"
          sx={{
            color: '#00c3ff',
            borderColor: '#00c3ff',
            borderWidth: '1.5px',
            fontWeight: 600,
            py: 1.5,
            borderRadius: '12px',
            mb: 4,
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
      </Box>
    </Box>
  );
};

export default EditProfileContainer; 