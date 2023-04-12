import styled, { css } from 'styled-components';

export const visuallyHidden = css`
  position: absolute !important;
  width: 0.0625rem !important;
  height: 0.0625rem !important;
  margin: -0.0625rem !important;
  padding: 0 !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
`;

export const Container = styled.div`
  display: inline-flex;
`;

export const CheckContainer = styled.span`
  display: flex;
  align-items: center;
  width: 1.125rem;
  height: 1.125rem;
  color: ${({ theme }) => theme.colors.primary.white};
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: solid 1px ${({ theme }) => theme.colors.primary.neutral900};
  border-radius: 0.25rem;
`;

export const HiddenInput = styled.input`
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  appearance: none;
`;

export const Label = styled.label`
  ${HiddenInput}:checked + &,
  ${HiddenInput}:hover:checked + &,
  ${HiddenInput}:focus:checked  + & {
    ${CheckContainer} {
      background-color: ${({ theme }) => theme.colors.primary.neutral800};
      border-color: ${({ theme }) => theme.colors.primary.neutral800};
    }
  }

  ${HiddenInput}:disabled:not(:checked) + &,
  ${HiddenInput}:hover:disabled:not(:checked) + &,
  ${HiddenInput}:focus:disabled:not(:checked)  + & {
    ${CheckContainer} {
      color: ${({ theme }) => theme.colors.primary.white};
      background-color: ${({ theme }) => theme.colors.primary.white};
      border-color: ${({ theme }) => theme.colors.primary.neutral300};
    }
  }

  ${HiddenInput}:disabled:checked + & {
    ${CheckContainer} {
      background-color: ${({ theme }) => theme.colors.primary.neutral300};
      border-color: ${({ theme }) => theme.colors.primary.neutral300};
    }
  }

  ${HiddenInput}:hover:not(:checked):not(:disabled) + &, 
  ${HiddenInput}:focus:not(:checked):not(:disabled) + & {
    ${CheckContainer} {
      color: ${({ theme }) => theme.colors.primary.neutral200};
      background-color: ${({ theme }) => theme.colors.primary.neutral200};
      border-color: ${({ theme }) => theme.colors.primary.neutral800};
    }
  }
`;

export const HiddenLabel = styled.span`
  ${visuallyHidden}
`;
