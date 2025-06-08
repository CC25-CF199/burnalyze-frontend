import { Box, Typography, IconButton, Switch, Card } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Image } from '../../components/atoms';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';

const SettingsContainer = () => {
  const navigate = useNavigate();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailNotificationsToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handlePushNotificationsToggle = () => {
    setPushNotifications(!pushNotifications);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleChangePasswordClick = () => {
    navigate('/change-password');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff', px: 2.5, py: 2.5 }}>
      {/* Top Navigation Bar */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3
        }}
      >
        <IconButton>
          <MenuIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        
        <Image src={burnalyzeLogo} type="landingLogo" />

        <Box sx={{ width: 40 }} />
      </Box>

      {/* Settings Title */}
      <Typography
        variant="h5"
        sx={{
          fontSize: '1.125rem',
          fontWeight: 700,
          color: '#222222',
          mb: 2
        }}
      >
        Settings
      </Typography>

      {/* General Section */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          mt: 2,
          mb: 1
        }}
      >
        General
      </Typography>

      {/* Language Setting */}
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f8f9fa'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <LanguageIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Language
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: '#999999'
            }}
          >
            Indonesia
          </Typography>
          <ChevronRightIcon sx={{ fontSize: 16, color: '#999999' }} />
        </Box>
      </Card>

      {/* Dark Mode Setting */}
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <DarkModeIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Dark Mode
          </Typography>
        </Box>
        <Switch
          checked={darkMode}
          onChange={handleDarkModeToggle}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#ffffff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#00c3ff'
              }
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#e5e7eb'
            }
          }}
        />
      </Card>

      {/* Notifications Section */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          mt: 2,
          mb: 1
        }}
      >
        Notifications
      </Typography>

      {/* Email Notifications Setting */}
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <EmailIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Email Notifications
          </Typography>
        </Box>
        <Switch
          checked={emailNotifications}
          onChange={handleEmailNotificationsToggle}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#ffffff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#00c3ff'
              }
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#e5e7eb'
            }
          }}
        />
      </Card>

      {/* Push Notifications Setting */}
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <NotificationsIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Push Notifications
          </Typography>
        </Box>
        <Switch
          checked={pushNotifications}
          onChange={handlePushNotificationsToggle}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#ffffff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#00c3ff'
              }
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#e5e7eb'
            }
          }}
        />
      </Card>

      {/* Security Section */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          mt: 2,
          mb: 1
        }}
      >
        Security
      </Typography>

      {/* Change Password Setting */}
      <Card
        onClick={handleChangePasswordClick}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f8f9fa'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <LockIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Change Password
          </Typography>
        </Box>
        <ChevronRightIcon sx={{ fontSize: 16, color: '#999999' }} />
      </Card>

      {/* Support Section */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          mt: 2,
          mb: 1
        }}
      >
        Support
      </Typography>

      {/* Contact Us Setting */}
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          p: 1.5,
          mb: 2,
          boxShadow: 'none',
          border: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f8f9fa'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#e6faff'
            }}
          >
            <ContactSupportIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#222222'
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <ChevronRightIcon sx={{ fontSize: 16, color: '#999999' }} />
      </Card>
    </Box>
  );
};

export default SettingsContainer; 