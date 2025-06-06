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
      height: { xs: 80, md: 200 },
      width: 'auto',
      mb: 1,
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
