import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Stack alignItems={'center'}>
      <Typography
        variant="h1"
        fontFamily={'Hyperion'}
        fontSize={'23rem'}
        color="primary"
        lineHeight={'20rem'}
        fontWeight={'bold'}
      >
        NI
      </Typography>
      <Typography
        variant="h2"
        fontFamily={'Hyperion'}
        color="secondary"
        lineHeight={'3.5rem'}
        fontSize={'3.5rem'}
      >
        SOFTWARE
      </Typography>
    </Stack>
  );
};

export default Logo;
