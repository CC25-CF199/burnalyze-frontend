import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Card,
  Button,
} from '@mui/material';
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
      {/* Top Navbar */}
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

      {/* Layout Wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 3,
          px: { xs: 2, md: 6 },
          py: 5,
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Profile Info */}
        <Box
          sx={{
            flex: 2,
            order: { xs: 0, md: 1 },
            width: '100%',
            backgroundColor: '#00c3ff',
            borderRadius: 3,
            px: 4,
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
          }}
        >
          <Avatar
            src="/profile-avatar.jpg"
            alt="Denis Toleransi"
            sx={{
              width: 80,
              height: 80,
              mb: 3,
              alignSelf: 'center',
              border: '4px solid white',
            }}
          />

          <Box sx={{ width: '100%' }}>
            {/* Username */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid white',
                py: 1,
              }}
            >
              <Typography sx={{ fontSize: '0.95rem' }}>Username</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>
                Denis Toleransi
              </Typography>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid white',
                py: 1,
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: '0.95rem' }}>Email</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>
                dontol22@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Sidebar */}
        <Card
          sx={{
            flex: 1,
            order: { xs: 1, md: 0 },
            width: { xs: '100%', md: 350 },
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            px: 2,
            py: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#00c3ff',
              mb: 2,
            }}
          >
            Profil Saya
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
            {/* Edit Profile */}
            <Box
              onClick={handleEditProfileClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                border: '1px solid #f0f0f0',
                borderRadius: 2,
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f8f9fa' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon sx={{ fontSize: 20, color: '#00c3ff' }} />
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                  Edit Profile
                </Typography>
              </Box>
              <ChevronRightIcon sx={{ fontSize: 20, color: '#666666' }} />
            </Box>

            {/* Setting */}
            <Box
              onClick={handleSettingsClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                border: '1px solid #f0f0f0',
                borderRadius: 2,
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f8f9fa' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SettingsIcon sx={{ fontSize: 20, color: '#00c3ff' }} />
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                  Setting
                </Typography>
              </Box>
              <ChevronRightIcon sx={{ fontSize: 20, color: '#666666' }} />
            </Box>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              fullWidth
              startIcon={<LogoutIcon />}
              sx={{
                backgroundColor: '#00c3ff',
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#00b3e6' },
                borderRadius: '12px',
                py: 1.2,
                fontSize: '0.95rem',
              }}
            >
              Log Out
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<DeleteIcon />}
              sx={{
                color: '#00c3ff',
                borderColor: '#00c3ff',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#00b3e6',
                  backgroundColor: 'rgba(0, 195, 255, 0.04)',
                },
                borderRadius: '12px',
                py: 1.2,
                fontSize: '0.95rem',
              }}
            >
              Delete Account
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ProfileContainer;
