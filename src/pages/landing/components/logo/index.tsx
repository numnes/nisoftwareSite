import { Stack } from '@mui/system';
import React from 'react';
import LogoNiSoftware from 'assets/images/LogoPNG.png';
import { ImageLogo } from './styles';

const Logo: React.FC = () => {
  return (
    <Stack alignItems={'center'}>
      <ImageLogo
        src={LogoNiSoftware}
        alt="Logo"
        sx={{
          width: {
            lg: '400px',
            md: '400px',
            sm: '200px',
            xs: '200px',
          },
        }}
      />
    </Stack>
  );
};

export default Logo;
