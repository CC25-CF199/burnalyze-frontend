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
      height: 124,
      width: 'auto',
      mb: 1,
    },
  },
  // Landing page specific styles
  landingLogo: {
    sx: {
      height: 28,
      width: 'auto',
    },
  },
  landingHeroImage: {
    sx: {
      height: { xs: 160, md: 192 },
      width: 'auto',
      objectFit: 'contain',
    },
  },
  featureIcon: {
    sx: {
      width: 24,
      height: 24,
      mb: 1,
    },
  },
  factIcon: {
    sx: {
      width: 32,
      height: 32,
      mx: 'auto',
      mb: 1,
    },
  },
};

export { styleConfig };
