import {
  LocalHospital,
  TipsAndUpdates,
  ArrowDropDown,
} from '@mui/icons-material';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

const DetectionResultAccordion = ({ treatments }) => {
  return (
    <Accordion
      sx={{
        boxShadow: 4,
        borderRadius: '8px !important', // Force border radius
        '&.Mui-expanded': {
          margin: '0 !important',
          borderRadius: '8px !important', // Maintain radius when expanded
        },
        '&:before': {
          display: 'none',
        },
        // Target the first child (AccordionSummary)
        '& .MuiAccordionSummary-root': {
          borderRadius: '8px 8px 0 0', // Top corners only
        },
        // Target the last child (AccordionDetails)
        '& .MuiAccordionDetails-root': {
          borderRadius: '0 0 8px 8px', // Bottom corners only
        },
        // When collapsed, make all corners rounded
        '&:not(.Mui-expanded)': {
          '& .MuiAccordionSummary-root': {
            borderRadius: '8px',
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          paddingInline: { xs: '0 12px 12px 12px', md: '0 24px 24px 24px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LocalHospital
            sx={{
              color: '#01CEE1',
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: '14px', md: '18px' },
            }}
          >
            Rekomendasi Penanganan
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          padding: { xs: '0 12px 12px 12px', md: '0 24px 24px 24px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: '5px',
              md: '8px',
            },
          }}
        >
          {treatments.map(item => (
            <Typography
              sx={{
                fontSize: { xs: '12px', md: '14px' },
              }}
            >
              {item}.
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <TipsAndUpdates sx={{ color: '#01CEE1' }} />
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              color: '#01CEE1',
            }}
          >
            Selalu tutup luka bakar dengan kain steril atau perban.
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default DetectionResultAccordion;
