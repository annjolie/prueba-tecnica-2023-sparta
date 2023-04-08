import styled from 'styled-components';
import { from } from '../utils/responsive';

export const title1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.abel};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  font-size: ${({ theme }) => theme.fontSizes.larger};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.big};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.bigger};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.higher};
  }
`;

export const title2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.abel};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  font-size: ${({ theme }) => theme.fontSizes.large};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.big};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.bigger};
  }
`;

export const title3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.abel};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  font-size: ${({ theme }) => theme.fontSizes.medium};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.big};
  }
`;

export const title4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.abel};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  font-size: ${({ theme }) => theme.fontSizes.small};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
`;

export const title5 = styled.h5`
  font-family: ${({ theme }) => theme.fonts.abel};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const body1 = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const body2 = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
`;

export const body3 = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.larger};
  }
`;

export const button = styled.p`
  font-family: ${({ theme }) => theme.fonts.monserrat};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.monserrat};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const overline = styled.p`
  font-family: ${({ theme }) => theme.fonts.monserrat};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  ${from.tabletLandscape} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${from.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
