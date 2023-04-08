import { Container, Label } from './styles';
import React from 'react';
import type { ButtonProps } from './types';

export default function Button({
  label,
  className,
  onClick
}: ButtonProps): JSX.Element {
  return (
    <Container className={className} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
}
