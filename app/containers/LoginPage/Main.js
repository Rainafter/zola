import React from 'react';
import LoginInput from '../../components/Login';
import Logo from '../../components/Login/Logo';
import { Wrapper, Container } from './StyledComponents';

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <LoginInput />
      </Wrapper>
    </Container>
  );
};

export default Main;
