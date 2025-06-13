import { Box, Avatar, Typography, Skeleton } from '@mui/material';

const UserProfileHeader = ({ userProfile, isCallLoading }) => {
  function stringAvatar(name) {
    // Guard against undefined/null/empty name
    if (!name) return { children: '?' };

    const nameParts = name.split(' ');

    // Handle single word names or invalid splits
    if (nameParts.length === 1) {
      return {
        children: `${nameParts[0][0]}`,
      };
    }

    // Handle normal cases with first and last name
    return {
      children: `${nameParts[0][0]}${nameParts[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: { md: 'fit-content' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        py: 3,
        px: { md: 3 },
        gap: { xs: 1, md: 3 },
        backgroundColor: 'primary.main',
        borderRadius: { xs: '0 0 8px 8px', md: '8px' },
      }}
    >
      {!userProfile || isCallLoading ? (
        <>
          <Skeleton variant="circular" height={80} width={80} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'start' },
            }}
          >
            <Skeleton width={100} />
            <Skeleton width={150} />
          </Box>
        </>
      ) : (
        <>
          <Avatar
            {...stringAvatar(userProfile.username)}
            sx={{
              height: 80,
              width: 80,
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: 'white',
              }}
            >
              {userProfile.username}
            </Typography>
            <Typography
              sx={{
                color: 'white',
              }}
            >
              {userProfile.email}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default UserProfileHeader;
