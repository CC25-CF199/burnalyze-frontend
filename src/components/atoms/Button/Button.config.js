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
  loginBtn: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    type: 'submit',
    sx: {
      color: '#FFF',
      fontWeight: 600,
      fontSize: { xs: '14px', md: '16px' },
    },
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
