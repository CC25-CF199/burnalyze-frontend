import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUserHistories } from '../../redux/detectionHistory';
import { NoRecordCardComponent } from '../../components/molecules';

const DetectionHistoryContainer = () => {
  const dispatch = useDispatch();
  const isCallLoading = useSelector(state => state.detectionHistory.loading);
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const histories = useSelector(state => state.detectionHistory.histories);

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
        gap: 2,
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>Riwayat</Typography>
      {isAuth ? <h1>data</h1> : <NoRecordCardComponent />}
    </Box>
  );
};

export default DetectionHistoryContainer;
