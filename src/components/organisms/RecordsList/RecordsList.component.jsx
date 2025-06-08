import { Box, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  NoRecordHeaderCardComponent,
  LatestDetectionCardComponent,
  RecordListCardComponent,
} from '../../molecules';

const RecordsList = () => {
  const histories = useSelector(
    state => state.detectionHistory.histories?.userHistories
  );
  const isUserHasHistories = histories?.length > 0;

  const sortedHistories = useMemo(() => {
    if (!histories) return [];
    return [...histories].sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }, [histories]);
  const latestHistory = sortedHistories[0];

  return (
    <Box>
      {isUserHasHistories ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <LatestDetectionCardComponent latestHistory={latestHistory} />
          <RecordListCardComponent sortedHistories={sortedHistories} />
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
