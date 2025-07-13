import { useState } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Collapse,
} from '@mui/material';
import { ArrowDownward, ArrowUpwardSharp } from '@mui/icons-material';

import { factCards } from '../../../data';

const FactSection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left: '50%',
        right: '50%',
        py: 5,
        px: { xs: 1, md: 8 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: '22px', // for mobile
            sm: '26px', // for tablets
            md: '30px', // for desktop
          },
          fontWeight: 600,
          color: '#01CEE1',
          textAlign: 'center',
          mb: 5,
        }}
      >
        Info Statistik Luka Bakar di Indonesia
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {factCards.map((fact, index) => {
          const isActive = activeCardIndex === index;

          return (
            <Box
              key={index}
              onClick={() => setActiveCardIndex(isActive ? null : index)}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                maxWidth: '375px',
                border: '1px solid #00c3ff',
                borderRadius: 2,
                p: 3,
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <fact.icon sx={{ fontSize: 40, color: '#01CEE1' }} />
              </Box>

              {/* Text */}
              <Typography
                sx={{
                  color: '#01CEE1',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                {fact.text}
              </Typography>

              {/* Description with smooth expand */}
              <Collapse in={isActive}>
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: '0.85rem',
                    color: '#01CEE1',
                    fontWeight: 400,
                    transition: 'opacity 0.3s',
                  }}
                >
                  {fact.desc}
                </Typography>
              </Collapse>

              {/* Arrow */}
              <Box sx={{ mt: 2 }}>
                {isActive ? (
                  <ArrowUpwardSharp sx={{ fontSize: 28, color: '#00c3ff' }} />
                ) : (
                  <ArrowDownward sx={{ fontSize: 28, color: '#00c3ff' }} />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FactSection;
