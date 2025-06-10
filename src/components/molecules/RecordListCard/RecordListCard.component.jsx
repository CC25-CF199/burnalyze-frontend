import { Box, Button, Typography, Skeleton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

import { Image } from '../../atoms';
import { getClassColor } from '../../organisms/HistoryLabels/HistoryLabels.config';

const RecordListCard = ({ sortedHistories }) => {
  const isCallLoading = useSelector(state => state.detectionHistory.loading);

  return isCallLoading ? (
    <>
      <Skeleton variant="rounded" animation="wave" height={50} />
      <Skeleton variant="rounded" animation="wave" height={50} />
      <Skeleton variant="rounded" animation="wave" height={50} />
    </>
  ) : (
    <Box
      sx={{
        maxHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        padding: 1,
        overflow: { md: 'auto' },
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
                color: getClassColor(history.class),
              }}
            >
              {history.class}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default RecordListCard;
