import { Box, Typography, IconButton, Avatar, Card, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';

import { Image } from '../../components/atoms';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const ProfileContainer = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleEditProfileClick = () => {
    navigate('/edit-profile');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
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

      {/* Profile Card Section */}
      <Box
        sx={{
          backgroundColor: '#00c3ff',
          borderRadius: '0 0 16px 16px',
          pt: 4,
          pb: 3,
          textAlign: 'center',
          mb: 3
        }}
      >
        {/* Avatar */}
        <Avatar
          sx={{
            width: 72,
            height: 72,
            mx: 'auto',
            mb: 2,
            border: '4px solid white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
          src="/profile-avatar.jpg"
          alt="Denis Toleransi"
        >
          DT
        </Avatar>

        {/* User Name */}
        <Typography
          variant="h6"
          sx={{
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: 600,
            mb: 1
          }}
        >
          Denis Toleransi
        </Typography>

        {/* Email */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          <EmailIcon sx={{ fontSize: 16, color: '#e8faff' }} />
          <Typography
            sx={{
              color: '#e8faff',
              fontSize: '0.875rem',
              fontWeight: 400
            }}
          >
            dontol22@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ px: 2 }}>
        {/* Action List Card */}
        <Card
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            mb: 3,
            overflow: 'hidden'
          }}
        >
          {/* Edit Profile */}
          <Box
            onClick={handleEditProfileClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2.5,
              py: 2,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f8f9fa'
              },
              borderBottom: '1px solid #f0f0f0'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: '#e8f8ff',
                mr: 2
              }}
            >
              <PersonIcon sx={{ fontSize: 20, color: '#00c3ff' }} />
            </Box>
            <Typography
              sx={{
                flex: 1,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#2e2e2e'
              }}
            >
              Edit Profile
            </Typography>
            <ChevronRightIcon sx={{ fontSize: 20, color: '#666666' }} />
          </Box>

          {/* Setting */}
          <Box
            onClick={handleSettingsClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2.5,
              py: 2,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f8f9fa'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: '#e8f8ff',
                mr: 2
              }}
            >
              <SettingsIcon sx={{ fontSize: 20, color: '#00c3ff' }} />
            </Box>
            <Typography
              sx={{
                flex: 1,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#2e2e2e'
              }}
            >
              Setting
            </Typography>
            <ChevronRightIcon sx={{ fontSize: 20, color: '#666666' }} />
          </Box>
        </Card>

        {/* Log Out Button */}
        <Button
          sx={{
            backgroundColor: '#00c3ff',
            color: '#ffffff',
            fontWeight: 600,
            py: 1.5,
            borderRadius: '12px',
            mb: 1.5,
            '&:hover': {
              backgroundColor: '#00b3e6'
            },
            textTransform: 'none',
            fontSize: '1rem'
          }}
          fullWidth
          startIcon={<LogoutIcon />}
        >
          Log Out
        </Button>

        {/* Delete Account Button */}
        <Button
          variant="outlined"
          sx={{
            color: '#00c3ff',
            borderColor: '#00c3ff',
            fontWeight: 500,
            py: 1.5,
            borderRadius: '12px',
            '&:hover': {
              borderColor: '#00b3e6',
              backgroundColor: 'rgba(0, 195, 255, 0.04)'
            },
            textTransform: 'none',
            fontSize: '0.95rem'
          }}
          fullWidth
          startIcon={<DeleteIcon />}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileContainer; 