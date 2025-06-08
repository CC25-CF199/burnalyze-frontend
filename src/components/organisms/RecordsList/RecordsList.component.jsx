import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

import { Image } from '../../atoms';
import {
  NoRecordHeaderCardComponent,
  LatestDetectionCardComponent,
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {sortedHistories.slice(1).map(history => {
              const formattedDate = history.created_at
                ? format(parseISO(history.created_at), 'dd MMMM yyyy, HH:mm', {
                    locale: id,
                  })
                : '-';

              return (
                <Button
                  key={history.id}
                  component={NavLink}
                  to={`/detection/history/details/${history.id}`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    boxShadow: 3,
                    padding: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1, md: 3 },
                    }}
                  >
                    <Image src={history.image_url} type="historiesThumbnail" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: { xs: '12px', md: '16px' },
                        color: 'black',
                      }}
                    >
                      {formattedDate}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: { xs: '12px', md: '16px' },
                      color: 'black',
                    }}
                  >
                    {history.class}
                  </Typography>
                </Button>
              );
            })}
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
