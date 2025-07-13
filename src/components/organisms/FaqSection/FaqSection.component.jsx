import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { faq } from '../../../data';

const FaqSection = () => {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Box
        sx={{
          backgroundColor: '#f3f3f3',
          borderRadius: '16px',
          px: { xs: 2, sm: 3, md: 6 }, // responsive horizontal padding
          py: { xs: 3, md: 5 }, // responsive vertical padding
          maxWidth: { xs: '100%', md: 1200 }, // wider on desktop
          mx: 'auto',
        }}
      >
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
          <span style={{ color: '#555' }}> Find answer for your </span>{' '}
          <span style={{ color: '#01CEE1' }}>questions</span>
        </Typography>

        {/* FAQ Accordion Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faq.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: 'white',
                borderRadius: '12px !important',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: 0 },
              }}
              defaultExpanded={index === 0}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#555555' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1f1f1f',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#555555',
                    lineHeight: 1.6,
                    textAlign: 'left',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;
