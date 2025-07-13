import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import { features } from '../../../data';

const FeaturesCarousel = () => {
  return (
    <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#f8fafc' }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: '20px',
            sm: '26px',
            md: '30px',
          },
          fontWeight: 600,
          textAlign: 'center',
          mb: 5,
        }}
      >
        <span style={{ color: '#555' }}>Fitur Unggulan</span>{' '}
        <span style={{ color: '#01CEE1' }}>BurnAlyze</span>
      </Typography>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          left: '50%',
          right: '50%',
          ml: '-50vw',
          mr: '-50vw',
        }}
      >
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={16}
          style={{
            paddingBottom: '3rem',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
          breakpoints={{
            960: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '80%',
                maxWidth: 300,
              }}
            >
              <Box
                sx={{
                  border: '1px solid #00c3ff',
                  borderRadius: 3,
                  p: 3,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    mx: 'auto',
                    mb: 2,
                    color: '#00c3ff',
                    fontSize: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e5fcff',
                    borderRadius: 2,
                  }}
                >
                  <feature.icon />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#444444',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    textAlign: 'center',
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default FeaturesCarousel;
