const labelStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#393E46',
  fontSize: { xs: '12px', md: '16px' },
  '& .label': {
    fontWeight: 500,
    minWidth: '120px',
    width: { md: '200px' },
    textAlign: 'left',
  },
  '& .woundType': {
    color: '#01CEE1',
    fontWeight: 600,
    textAlign: 'right',
  },
  '& .value': {
    color: 'text.secondary',
    fontWeight: 600,
    textAlign: 'right',
  },
};

const getClassColor = burnClass => {
  switch (burnClass?.toLowerCase()) {
    case 'tingkat 1':
      return '#4CAF50'; // Green for mild
    case 'tingkat 2':
      return '#D4B200'; // Orange for moderate
    case 'tingkat 3':
      return '#FF0606'; // Red for severe
    default:
      return 'text.secondary'; // Default color
  }
};

export { labelStyles, getClassColor };
