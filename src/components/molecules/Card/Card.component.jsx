import { Box, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';

const Card = ({ title, content }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.main',
        borderRadius: '16px',
        color: 'secondary.main',
      }}
    >
      <Info />
      <Box>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
