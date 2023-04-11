import styled, { css } from 'styled-components';
import { button } from '../../styles/theme/typography';
import { $ContainerProps } from './types';

export const Container = styled.span<$ContainerProps>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 0.375rem;
  cursor: pointer;
  height: 35px;

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'no-bg':
        return css`
          color: ${theme.colors.primary.purpleSunset400};
          background-color: transparent;
          border: none;
          transition: background-color 0.2s ease-in-out;
          &:hover,
          &:focus-visible {
            color: ${theme.colors.primary.purpleSunset600};
          }
          :disabled {
            opacity: '0.36';
          }
        `;
      case 'primary':
      default:
        return css`
          border: 2px solid ${theme.colors.primary.neutral800};
          color: ${theme.colors.primary.neutral800};
          background-color: ${theme.colors.primary.yellowBee200};
          transition: background-color 0.2s ease-in-out;
          &:hover {
            background-color: ${theme.colors.primary.yellowBee100};
          }
          &:focus-visible {
            background-color: ${theme.colors.primary.yellowBee200};
            outline: solid 1px theme.colors.yellowBee100;
          }
          :disabled {
            opacity: '0.36';
          }
        `;
    }
  }}
`;

export const ButtonLabel = styled(button)``;

export const Label = styled.p``;
