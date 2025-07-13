import { Box, Typography, IconButton, Divider, Link } from '@mui/material';
import { YouTube, Facebook, Instagram, X } from '@mui/icons-material';

const FooterSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1f23',
        color: '#f5f5f5',
        py: 4,
        px: 3,
        width: '100vw',
        ml: 'calc(-50vw + 50%)',
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
          mb: 3,
        }}
      >
        {/* Left Column - Branding and Links */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              mb: 2,
              color: '#f5f5f5',
            }}
          >
            BurnAlyze
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: '#f5f5f5',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              Tentang Kami
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: '#f5f5f5',
                textDecoration: 'none',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              Fitur
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: '#f5f5f5',
                textDecoration: 'none',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              Edukasi
            </Link>
          </Box>
        </Box>

        {/* Right Column - Social Media */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              mb: 2,
              color: '#f5f5f5',
            }}
          >
            Media Sosial
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              sx={{
                color: '#f5f5f5',
                p: 0,
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <Facebook sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: '#f5f5f5',
                p: 0,
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <Instagram sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: '#f5f5f5',
                p: 0,
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <X sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                color: '#f5f5f5',
                p: 0,
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              <YouTube sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          borderColor: '#d9d9d9',
          opacity: 0.3,
          my: 3,
        }}
      />

      {/* Copyright */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          color: '#f5f5f5',
          opacity: 0.8,
          textAlign: 'left',
        }}
      >
        Hak Cipta © 2025 BurnAlyze
      </Typography>
    </Box>
  );
};

export default FooterSection;
