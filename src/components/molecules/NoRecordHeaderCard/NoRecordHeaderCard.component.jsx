import { Box, Typography } from '@mui/material';
import SickIcon from '@mui/icons-material/Sick';
import { NavLink } from 'react-router-dom';

import { Button } from '../../atoms';

const NoRecordHeaderCard = ({ items, hasBtn }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        boxShadow: 4,
        padding: 2,
        borderRadius: '8px',
        maxWidth: '500px',
        marginInline: 'auto',
      }}
    >
      <SickIcon sx={{ color: '#FF6B6B', fontSize: '40px' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px' },
            fontWeight: 600,
            color: '#01CEE1',
            textAlign: 'center',
          }}
        >
          Riwayatmu masih kosong
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px' },
            textAlign: 'center',
          }}
        >
          {items}
        </Typography>
      </Box>
      {hasBtn && (
        <NavLink to="/login">
          <Button items="Sign In" type="signInMobile" />
        </NavLink>
      )}
    </Box>
  );
};

export default NoRecordHeaderCard;
