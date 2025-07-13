import { Box, Typography } from '@mui/material';

import { testimonials } from '../../../data';
import { TestimonialCard } from '../../molecules';

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 4, px: 2, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: '20px', // for mobile
            sm: '26px', // for tablets
            md: '30px', // for desktop
          },
          fontWeight: 600,
          textAlign: 'center',
          mb: 5,
        }}
      >
        <span style={{ color: '#555' }}>Why </span>{' '}
        <span style={{ color: '#01CEE1' }}>BurnAlyze</span>
      </Typography>

      {/* Testimonial Cards */}
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialSection;
