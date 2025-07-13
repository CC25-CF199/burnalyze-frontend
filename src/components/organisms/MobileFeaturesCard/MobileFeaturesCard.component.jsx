import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { featureCards } from '../../../data';

const MobileFeaturesCard = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' }, // Show only on mobile
        justifyContent: 'space-between',
        backgroundColor: 'white',
        px: 2,
        py: 2.5,
        borderRadius: '20px',
        mx: 'auto',
        maxWidth: 360,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {featureCards.map((feature, index) => (
        <Box
          component={NavLink}
          to={feature.link}
          key={index}
          sx={{
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          <Box
            component="img"
            src={feature.icon}
            alt={feature.title}
            sx={{
              height: 28,
              width: 'auto',
              margin: 'auto',
              mb: 1,
              objectFit: 'contain',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'text.primary',
            }}
          >
            {feature.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MobileFeaturesCard;
