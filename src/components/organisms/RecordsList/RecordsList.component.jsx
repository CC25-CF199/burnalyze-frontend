import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { History } from '@mui/icons-material';

import { NoRecordHeaderCardComponent } from '../../molecules';

const RecordsList = () => {
  const histories = useSelector(state => state.detectionHistory.histories);
  const isUserHasHistories = histories?.userHistories?.length > 0;

  return (
    <Box>
      {isUserHasHistories ? (
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              boxShadow: 4,
              padding: 2,
              borderRadius: '8px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <History
                sx={{
                  color: '#01CEE1',
                }}
              />
              <Typography variant="subtitle2">
                Riwayat deteksi terbaru
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <NoRecordHeaderCardComponent
          hasBtn={false}
          items="Sepertinya riwayatmu masih kosong. Scan luka bakar pertamamu untuk mulai menyimpan riwayat deteksi."
        />
      )}
    </Box>
  );
};

export default RecordsList;
