import { AccountCircle, Logout } from '@mui/icons-material';

import { logout } from '../redux/auth';
import { store } from '../redux/store';

import home from '../assets/icons/home.png';
import detection from '../assets/icons/detection.png';
import education from '../assets/icons/education.png';
import history from '../assets/icons/history.png';

export const navItems = [
  {
    title: 'Beranda',
    iconPath: home,
    linkTo: '/',
  },
  {
    title: 'Deteksi',
    iconPath: detection,
    linkTo: '/detection',
  },
  {
    title: 'Edukasi',
    iconPath: education,
    linkTo: '/education',
  },
  {
    title: 'Riwayat',
    iconPath: history,
    linkTo: '/detection/history',
  },
];

export const userMenuItems = [
  {
    title: 'Profile',
    linkTo: '',
    icon: AccountCircle,
  },
  {
    title: 'Logout',
    linkTo: '',
    icon: Logout,
    onClick: () => {
      store.dispatch(logout());
    },
  },
];
