import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUserHistories } from '../../redux/detectionHistory';
import { NoRecordHeaderCardComponent } from '../../components/molecules';
import { RecordsListComponent } from '../../components/organisms';

const DetectionHistoryContainer = () => {
  const dispatch = useDispatch();
  const isCallLoading = useSelector(state => state.detectionHistory.loading);
  const isAuth = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllUserHistories());
    }
  }, [dispatch, isAuth]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography
        sx={{ fontWeight: 600, fontSize: { xs: '16px', md: '20px' } }}
      >
        Riwayat
      </Typography>
      {isAuth ? (
        <RecordsListComponent />
      ) : (
        <NoRecordHeaderCardComponent
          hasBtn={true}
          items="Daftar dan Login akunmu untuk mulai melihat riwayat deteksi"
        />
      )}
    </Box>
  );
};

export default DetectionHistoryContainer;
