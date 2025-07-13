import { Box, Typography } from '@mui/material';

const TestimonialCard = ({ data, index }) => {
  const { title, desc, rating, outOf } = data;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
        mb: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          p: 2.5,
          maxWidth: 615,
          textAlign: 'left',
        }}
      >
        <Typography
          sx={{
            color: '#00c3ff',
            fontWeight: 700,
            fontSize: '1rem',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: '#333333',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
            mb: 2,
            textAlign: 'left',
          }}
        >
          {desc}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            mt: 2,
          }}
        >
          {Array.from({ length: rating }, (_, index) => (
            <Typography
              key={index}
              sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}
            >
              ⭐
            </Typography>
          ))}
          <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
            {rating}/{outOf}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
