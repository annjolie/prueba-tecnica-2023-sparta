import { Container, Title, Wrapper, Text, IconContainer } from './styles';
import React from 'react';
import { Logout } from '@carbon/icons-react';
import type { NavbarProps } from './types';

export default function Navbar({
  logOut,
  className
}: NavbarProps): JSX.Element {
  return (
    <Container className={className}>
      <Title>Sparta</Title>
      <Wrapper onClick={logOut}>
        <Text>Logout</Text>
        <IconContainer>
          <Logout size={20} />
        </IconContainer>
      </Wrapper>
    </Container>
  );
}
