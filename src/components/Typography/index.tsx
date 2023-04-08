import {
  Container,
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
  Subtitle1,
  Subtitle2,
  Body1,
  ButtonText,
  CaptionText,
  OverlineText
} from './styles';
import React from 'react';
import type { TypographyProps } from './types';

export default function Typography({
  className
}: TypographyProps): JSX.Element {
  return (
    <Container className={className}>
      <H1Heading>h1.Heading</H1Heading>
      <H2Heading>h2.Heading</H2Heading>
      <H3Heading>h3.Heading</H3Heading>
      <H4Heading>h4.Heading</H4Heading>
      <H5Heading>h5.Heading</H5Heading>
      <Subtitle1>
        subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Subtitle1>
      <Subtitle2>
        subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Subtitle2>
      <Body1>
        body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Body1>
      <ButtonText>Button Text</ButtonText>
      <CaptionText>Caption Text</CaptionText>
      <OverlineText>Overline Text</OverlineText>
    </Container>
  );
}
