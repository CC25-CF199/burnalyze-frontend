import {
  Box,
  Typography,
  IconButton,
  Switch,
  Card,
  Button,
} from '@mui/material';
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
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <IconButton>
          <MenuIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        <Image src={burnalyzeLogo} type="landingLogo" />
        <Box sx={{ width: 40 }} />
      </Box>

      {/* Page Content */}
      <Box sx={{ maxWidth: 700, mx: 'auto', px: 2.5, py: 3 }}>
        {/* Page Title */}
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#222222',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Setting
        </Typography>

        {/* Section: General */}
        <Card sx={{ borderRadius: 3, mb: 3, p: 2 }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#999',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            General
          </Typography>

          {/* Language */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LanguageIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Language</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography sx={{ color: '#999' }}>Indonesia</Typography>
              <ChevronRightIcon sx={{ fontSize: 16, color: '#999' }} />
            </Box>
          </Box>

          {/* Dark Mode */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DarkModeIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Dark Mode</Typography>
            </Box>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#ffffff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#00c3ff',
                  },
                },
                '& .MuiSwitch-track': {
                  backgroundColor: '#e5e7eb',
                },
              }}
            />
          </Box>
        </Card>

        {/* Section: Notification */}
        <Card sx={{ borderRadius: 3, mb: 3, p: 2 }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#999',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            Notification
          </Typography>

          {/* Email Notification */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmailIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Email Notification</Typography>
            </Box>
            <Switch
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#ffffff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#00c3ff',
                  },
                },
                '& .MuiSwitch-track': {
                  backgroundColor: '#e5e7eb',
                },
              }}
            />
          </Box>

          {/* Push Notification */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <NotificationsIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Push Notification</Typography>
            </Box>
            <Switch
              checked={pushNotifications}
              onChange={() => setPushNotifications(!pushNotifications)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#ffffff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#00c3ff',
                  },
                },
                '& .MuiSwitch-track': {
                  backgroundColor: '#e5e7eb',
                },
              }}
            />
          </Box>
        </Card>

        {/* Section: Security */}
        <Card sx={{ borderRadius: 3, mb: 3, p: 2 }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#999',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            Security
          </Typography>

          <Box
            onClick={() => navigate('/change-password')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#f8f8f8' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LockIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Change Password</Typography>
            </Box>
            <ChevronRightIcon sx={{ fontSize: 16, color: '#999999' }} />
          </Box>
        </Card>

        {/* Section: Support */}
        <Card sx={{ borderRadius: 3, mb: 4, p: 2 }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#999',
              mb: 1,
              textTransform: 'uppercase',
            }}
          >
            Support
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1,
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#f8f8f8' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: '#e6faff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ContactSupportIcon sx={{ fontSize: 18, color: '#00c3ff' }} />
              </Box>
              <Typography sx={{ fontWeight: 500 }}>Contact Us</Typography>
            </Box>
            <ChevronRightIcon sx={{ fontSize: 16, color: '#999999' }} />
          </Box>
        </Card>

        {/* Button Kembali */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
  <Button
    variant="contained"
    onClick={() => navigate('/profile')}
    sx={{
      backgroundColor: '#00c3ff',
      color: 'white',
      px: 5,
      py: 1.25,
      borderRadius: '12px',
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.95rem',
      boxShadow: '0px 4px 8px rgba(0, 195, 255, 0.3)',
      '&:hover': { backgroundColor: '#00b0e6' },
    }}
  >
    Kembali
  </Button>
</Box>
      </Box>
    </Box>
  );
};

export default SettingsContainer;
