import { Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

import { labelStyles, getClassColor } from './HistoryLabels.config';

const HistoryLabels = ({ latestHistory }) => {
  const formattedDate = latestHistory.created_at
    ? format(parseISO(latestHistory.created_at), 'dd MMMM yyyy, HH:mm', {
        locale: id,
      })
    : '-';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, md: 2 },
      }}
    >
      <Typography sx={labelStyles}>
        <span className="label ">Tipe Luka Bakar</span>
        <span className="woundType">{latestHistory.burn_type || '-'}</span>
      </Typography>
      <Typography sx={labelStyles}>
        <span className="label">Derajat Luka Bakar</span>
        <span
          className="value"
          style={{ color: getClassColor(latestHistory.class) }}
        >
          {latestHistory.class || '-'}
        </span>
      </Typography>
      <Typography sx={labelStyles}>
        <span className="label ">Bagian Tubuh</span>
        <span className="value">{latestHistory.body_part || '-'}</span>
      </Typography>
      <Typography sx={labelStyles}>
        <span className="label">Tanggal</span>
        <span className="value">{formattedDate || '-'}</span>
      </Typography>
    </Box>
  );
};

export default HistoryLabels;
