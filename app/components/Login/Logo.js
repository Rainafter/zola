import React from 'react';

import logoPng from '../../assets/img/logo.svg';
import { ZolaLogo, LogoWrapper } from './StyledComponents';

const Logo = () => {
  return (
    <LogoWrapper>
      <ZolaLogo src={logoPng} />
    </LogoWrapper>
  );
};

export default Logo;
