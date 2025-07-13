import {
  HeroSection,
  MobileFeaturesCard,
  FactSection,
  FeaturesCarousel,
  TestimonialSection,
  FaqSection,
  FooterSection,
} from '../../components/organisms';

import { Box } from '@mui/material';

const LandingContainer = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <HeroSection />
      <Box
        sx={{
          mx: 'auto',
          backgroundColor: '#f8fafc',
          minHeight: 'calc(100vh - 400px)',
          overflowInline: 'hidden',
        }}
      >
        <MobileFeaturesCard />
        <FactSection />
        <FeaturesCarousel />
        <TestimonialSection />
        <FaqSection />
        <FooterSection />
      </Box>
    </Box>
  );
};

export default LandingContainer;
