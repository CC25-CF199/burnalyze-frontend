import { Box, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';

const Card = ({ title, content }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        borderRadius: '8px',
        color: 'secondary.main',
        paddingBlock: 1,
        paddingInline: 1,
        boxShadow: 3,
      }}
    >
      <Info sx={{ mr: 1 }} />
      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 600,
            mb: 0.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '10px', md: '14px' } }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
