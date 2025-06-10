import { Box, Typography, Button, Skeleton } from '@mui/material';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  DetectionResultCard,
  DetectionResultAccordion,
} from '../../components/molecules';
import { getHistoryById } from '../../redux/historyDetails/historyDetails.action';

const HistoryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector(state => state.historyDetails.history?.message);
  const isCallLoading = useSelector(state => state.historyDetails.loading);

  useEffect(() => {
    if (id) {
      dispatch(getHistoryById(id));
    }
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: {
          xs: 2,
          sm: '16px 10em 16px 10em',
          md: '16px 18em 16px 18em',
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: '16px' },
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Detail Riwayat
      </Typography>
      {isCallLoading || !details ? (
        <>
          <Skeleton variant="rounded" height={200} />
          <Skeleton variant="rounded" height={70} />
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
          }}
        >
          <DetectionResultCard
            imgSrc={details?.image_url}
            woundClass={details?.class}
            desc={details?.desc}
          />
          <DetectionResultAccordion treatments={details?.treatments} />
        </Box>
      )}
      <Button
        component={NavLink}
        to={`/detection/history`}
        variant="contained"
        size="medium"
        loading={isCallLoading}
        sx={{
          color: 'white',
        }}
      >
        Kembali
      </Button>
    </Box>
  );
};

export default HistoryDetails;
