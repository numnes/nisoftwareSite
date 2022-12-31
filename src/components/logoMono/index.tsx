import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

interface LogoMonoProps {
  color?: string;
  size?: number;
}

const logoMono: React.FC<LogoMonoProps> = (props: LogoMonoProps) => {
  const { color, size } = props;
  const sizeComponent = size ? size : 100;
  const sizeFirstText = 0.88;
  const sizeSecondText = 0.14;

  return (
    <Stack alignItems="center" justifyContent="center" width={sizeComponent} height={sizeComponent}>
      <Typography
        variant="h1"
        fontFamily={'Hyperion'}
        fontSize={`${sizeComponent * sizeFirstText}px`}
        color={color}
        lineHeight={`${sizeComponent * (sizeFirstText - 0.2)}px`}
        fontWeight={'bold'}
        flexDirection="row"
      >
        NI
      </Typography>
    </Stack>
  );
};

export default logoMono;
