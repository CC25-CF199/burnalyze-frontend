import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUserHistories } from '../../redux/detectionHistory';
import { NoRecordHeaderCardComponent } from '../../components/molecules';
import { RecordsListComponent } from '../../components/organisms';

const DetectionHistoryContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllUserHistories());
    }
  }, [dispatch, isAuth]);

  return (
    <Box
      sx={{
        padding: {
          xs: 2,
          sm: '16px 10em 16px 10em',
          md: '16px 12em 16px 12em',
        },
      }}
    >
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
