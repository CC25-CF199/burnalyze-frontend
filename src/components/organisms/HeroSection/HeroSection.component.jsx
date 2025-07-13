import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { featureCards } from '../../../data';
import { Image } from '../../atoms';
import doctor from '../../../assets/doctor.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 40% 50%, #00c3ff 0%, #00dffb 60%, #9fecf5 85%, rgba(159,236,245,0.3) 100%)`,
        borderRadius: '0 0 20px 20px',
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 },
          marginTop: '52px',
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Welcome Badge */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: '#ffdc3b',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              ✓
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: '#ffffff',
                fontSize: { xs: '0.875rem', md: '1rem' },
              }}
            >
              Selamat Datang di{' '}
              <Box component="span" sx={{ color: '#ffdc3b', fontWeight: 600 }}>
                BurnAlyze
              </Box>
              !
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            Deteksi cerdas dan klasifikasi luka bakar dengan cepat.
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff',
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: { xs: '90%', md: '100%' },
              mx: { xs: 'auto', md: 'unset' },
            }}
          >
            Melalui deteksi kamera, BurnAlyze membantu Anda mengenali jenis luka
            bakar dan memberikan langkah penanganan awal yang tepat.
          </Typography>

          {/* Feature Navigation Cards only show on desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
              gap: 4,
              mt: 6,
              flexWrap: 'wrap',
            }}
          >
            {featureCards.map((feature, index) => (
              <Box
                component={NavLink}
                to={feature.link}
                key={index}
                sx={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 80,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    border: '6px solid #57F1FF',
                    borderRadius: '50%',
                    width: 70,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    mb: 1,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src={feature.icon}
                    alt={feature.title}
                    sx={{
                      height: 28,
                      width: 'auto',
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'white',
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: 300, md: 400 },
            height: 'auto',
            position: 'relative',
            mx: 'auto',
            alignSelf: { xs: 'center', md: 'flex-end' },
            transform: {
              xs: 'translateX(0%) translateY(15%)',
              md: 'translateX(0) translateY(15.8%)',
            },
          }}
        >
          <Image src={doctor} type="heroDoctor" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
