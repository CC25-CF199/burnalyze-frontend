const styleConfig = {
  regular: {
    variant: 'contained',
    color: 'primary',
    sx: { color: '#ffffff', fontWeight: 600 },
  },
  submitBtn: {
    variant: 'contained',
    color: 'primary',
    type: 'submit',
    sx: { color: '#ffffff', fontWeight: 600 },
  },
  signInDesktop: {
    variant: 'contained',
    color: 'primary',
    sx: {
      color: '#ffffff',
      fontWeight: 600,
      display: {
        xs: 'none',
        md: 'block',
      },
    },
  },
  signInMobile: {
    variant: 'contained',
    color: 'primary',
    sx: {
      color: '#ffffff',
      fontWeight: 600,
      display: {
        xs: 'block',
        md: 'none',
      },
    },
  },
};

export { styleConfig };
