import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserProfile } from '../../redux/userProfile';
import {
  UserProfileHeaderComponent,
  UserProfileMenuComponent,
  UserProfileButtons,
  UserProfileModalComponent,
} from '../../components/molecules';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userProfile = useSelector(state => state.userProfile.user);
  const isCallLoading = useSelector(state => state.userProfile.loading);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (id) {
      dispatch(getUserProfile(id));
    }
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'space-between', md: 'center' },
        height: '100%',
        padding: { md: '2em 14em 2em 14em' },
      }}
    >
      <UserProfileHeaderComponent
        isCallLoading={isCallLoading}
        userProfile={userProfile}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'space-between', md: 'normal' },
          height: '100%',
          px: 2,
          py: { xs: 2, md: 0 },
          gap: { md: 4 },
          minWidth: { xs: 'none', md: 400 },
        }}
      >
        <UserProfileMenuComponent />
        <UserProfileButtons
          isCallLoading={isCallLoading}
          onModal={handleModal}
        />
      </Box>
      <UserProfileModalComponent isOpen={isOpen} handleModal={handleModal} />
    </Box>
  );
};

export default UserProfile;
