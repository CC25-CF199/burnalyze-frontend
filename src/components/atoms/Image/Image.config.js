const styleConfig = {
  navbarLogoDesktop: {
    sx: {
      height: 32,
      width: 'auto',
      maxHeight: { xs: 55, md: 64 },
      maxWidth: { xs: 'auto', md: 'auto' },
      display: { xs: 'none', md: 'flex' },
    },
  },
  navbarLogoMobile: {
    sx: {
      height: 32,
      width: 'auto',
      maxHeight: { xs: 55, md: 64 },
      maxWidth: { xs: 'auto', md: 'auto' },
      display: { xs: 'flex', md: 'none' },
    },
  },
  drawerLogo: {
    sx: {
      height: 32,
      width: 'auto',
      maxHeight: { xs: 55, md: 64 },
      maxWidth: { xs: 'auto', md: 'auto' },
    },
  },
  drawerItemsIcon: {
    sx: {
      height: 30,
      width: 'auto',
    },
  },
  detectionHeaderImg: {
    sx: {
      height: { xs: 90, sm: 100, md: 160 },
      width: 'auto',
      mb: 1,
    },
  },
  scanCompleteUserImg: {
    sx: {
      height: { xs: '56px' },
      width: { xs: '56px' },
      borderRadius: '8px',
    },
  },
  scanCompleteIcon: {
    sx: {
      height: { xs: '36px' },
      width: 'auto',
    },
  },
};

export { styleConfig };
