import { small } from '../../styles/theme/typography';
import styled, { css } from 'styled-components';

import { StylesProps } from './types';
import { Subtitle1 } from '../Typography/styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-height: 4rem;
  width: 100%;
`;

export const Label = styled(small)`
  color: ${({ theme }) => theme.colors.primary.neutral700};
`;

export const StyledInput = styled.input<StylesProps>`
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.neutral300};
  border-radius: 0.5rem;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.neutral600};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.neutral900};
    outline: none;
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.primary.neutral100};
    border-color: ${({ theme }) => theme.colors.primary.neutral300};
    cursor: not-allowed;
    ::placeholder {
      color: ${({ theme }) => theme.colors.primary.neutral400};
    }
  }

  ${({ theme, $hasError }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.secondary.supportError100} !important;
      padding-inline-end: 40px;
    `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  inset-inline-end: 0.75rem;
  inset-block-start: 2.45rem;
  color: ${({ theme }) => theme.colors.secondary.supportError200};
`;

export const Error = styled(Subtitle1)`
  color: ${({ theme }) => theme.colors.secondary.supportError200};
  margin-block-start: 0.15rem;
`;

export const Helper = styled(Subtitle1)`
  color: ${({ theme }) => theme.colors.primary.neutral600};
  margin-block-start: 0.15rem;
`;
