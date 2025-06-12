import { Box, Typography, Button, Skeleton } from '@mui/material';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Delete } from '@mui/icons-material';
import { message } from 'antd';

import {
  DetectionResultCard,
  DetectionResultAccordion,
} from '../../components/molecules';
import {
  deleteSingleHistory,
  getHistoryById,
} from '../../redux/historyDetails/historyDetails.action';

const HistoryDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const details = useSelector(state => state.historyDetails.history?.message);
  const isCallLoading = useSelector(state => state.historyDetails.loading);

  useEffect(() => {
    if (id) {
      dispatch(getHistoryById(id));
    }
  }, [dispatch, id]);

  const handleDeleteHistory = async () => {
    try {
      const result = await dispatch(deleteSingleHistory(id));

      if (result) {
        navigate('/detection/history');
        message.success('Riwayat deteksi berhasil dihapus');
      }
    } catch (error) {
      console.error('Failed to delete history:', error);
      message.error('Riwayat deteksi gagal dihapus');
    }
  };

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
          lg: '16px 26em 16px 26em',
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
        <>
          <DetectionResultCard
            imgSrc={details?.image_url}
            woundClass={details?.class}
            bodyPart={details?.body_part}
            desc={details?.desc}
          />
          <DetectionResultAccordion treatments={details?.treatments} />
        </>
      )}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <Button
          component={NavLink}
          to={`/detection/history`}
          variant="contained"
          size="medium"
          loading={isCallLoading}
          sx={{
            height: '100%',
            width: '100%',
            color: 'white',
          }}
        >
          Kembali
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={handleDeleteHistory}
          loading={isCallLoading}
          startIcon={<Delete />}
          sx={{
            height: '100%',
            width: '100%',
            color: 'white',
          }}
        >
          Hapus Riwayat
        </Button>
      </Box>
    </Box>
  );
};

export default HistoryDetails;
