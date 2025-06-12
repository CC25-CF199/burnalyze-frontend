import { Button } from '@mui/material';

const CustomTab = ({ label, selected, onClick, sx }) => {
  return (
    <Button
      onClick={onClick}
      variant={selected ? 'contained' : 'outlined'}
      sx={{
        width: '100%',
        py: 1,
        px: { xs: 1, md: 3 },
        color: selected ? 'white' : 'primary.main',
        backgroundColor: selected ? 'primary.lighter' : 'transparent',
        fontWeight: selected ? 600 : 400,
        fontSize: { xs: '12px', md: '14px' },
        borderRadius: '8px',
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default CustomTab;
