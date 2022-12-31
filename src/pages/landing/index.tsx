import { Icon, Stack, Typography } from '@mui/material';
import React from 'react';
import LogoMono from '../../components/logoMono';
import Logo from './components/logo';
import { FlexBanner, Footer, InitialBanner, SecondBanner } from './styles';
import ParticleBackground from 'react-particle-backgrounds';
import { GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const backgroundAnimationSettings = {
    particle: {
      particleCount: 100,
      color: '#fff',
      minSize: 1,
      maxSize: 4,
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000,
    },
  };

  return (
    <Stack>
      <FlexBanner position={'relative'}>
        <ParticleBackground settings={backgroundAnimationSettings} />
        <InitialBanner position={'absolute'}>
          <Logo />
        </InitialBanner>
      </FlexBanner>
      <Footer>
        <LogoMono color={'white'} size={100} />
        <Stack>
          <Link to="https://github.com/matheusnunesismael" color="info">
            <GitHub fontSize={'large'} color={'info'} />
          </Link>
        </Stack>
        <Typography variant={'body1'} color={'white'} fontSize={20}>
          Matheus Nunes Ismael
        </Typography>
      </Footer>
    </Stack>
  );
};

export default Landing;
