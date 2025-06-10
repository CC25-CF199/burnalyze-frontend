import { useSelector } from 'react-redux';
import { History } from '@mui/icons-material';
import { Box, Typography, Skeleton, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { HistoryLabelsComponent } from '../../organisms';

const LatestDetectionCard = ({ latestHistory }) => {
  const isCallLoading = useSelector(state => state.detectionHistory.loading);
  const historyId = latestHistory.id;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'space-between',
        boxShadow: 4,
        paddingBlock: { xs: 2, md: 3 },
        paddingInline: 3,
        borderRadius: '8px',
        height: 'fit-content',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <History
          sx={{
            color: '#01CEE1',
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: 600,
          }}
        >
          Riwayat deteksi terbaru
        </Typography>
      </Box>
      {isCallLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <HistoryLabelsComponent latestHistory={latestHistory} />
      )}
      <Button
        component={NavLink}
        to={`/detection/history/details/${historyId}`}
        size="medium"
        loading={isCallLoading}
        variant="contained"
        sx={{
          color: 'white',
        }}
      >
        Lihat Detail
      </Button>
    </Box>
  );
};

export default LatestDetectionCard;
