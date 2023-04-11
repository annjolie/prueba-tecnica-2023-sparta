import { ButtonLabel, Container } from './styles';
import React from 'react';
import type { ButtonProps } from './types';
import NextLink from 'next/link';

export default function Button({
  className,
  href,
  variant,
  label,
  onClick
}: ButtonProps): JSX.Element {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <Container as='a' className={className} $variant={variant}>
          <ButtonLabel>{label}</ButtonLabel>
        </Container>
      </NextLink>
    );
  }
  return (
    <Container
      className={className}
      as='button'
      $variant={variant}
      onClick={onClick}
    >
      <ButtonLabel>{label}</ButtonLabel>
    </Container>
  );
}
