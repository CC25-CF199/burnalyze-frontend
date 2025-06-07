import { InputAdornment } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const styleConfig = ({ type, showPassword }) => {
  switch (type) {
    case 'regular':
      return {
        label: 'Outlined',
        variant: 'outlined',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
          },
        },
      };

    case 'username':
      return {
        id: 'username',
        variant: 'outlined',
        color: 'primary',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
          },
        },
      };

    case 'email':
      return {
        id: 'email',
        variant: 'outlined',
        color: 'primary',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon className="size-5" />
              </InputAdornment>
            ),
          },
        },
      };

    case 'firstname':
      return {
        id: 'firstname',
        variant: 'outlined',
        color: 'primary',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
          },
        },
      };

    case 'lastname':
      return {
        id: 'lastname',
        variant: 'outlined',
        color: 'primary',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
          },
        },
      };

    case 'password':
      return {
        id: 'password',
        variant: 'outlined',
        color: 'primary',
        type: showPassword ? 'text' : 'password',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <KeyOutlinedIcon className="size-5" />
              </InputAdornment>
            ),
          },
        },
      };

    case 'confirmPassword':
      return {
        id: 'confirmPassword',
        variant: 'outlined',
        color: 'primary',
        type: showPassword ? 'text' : 'password',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <KeyOutlinedIcon className="size-5" />
              </InputAdornment>
            ),
          },
        },
      };
  }
};

export { styleConfig };
