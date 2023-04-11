import {
  Container,
  Error,
  Helper,
  IconWrapper,
  Label,
  StyledInput
} from './styles';
import React from 'react';
import { Warning } from '@carbon/icons-react';
import type { InputTextProps } from './types';

export default function InputText({
  className,
  helpMessage,
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  errorMessage
}: InputTextProps): JSX.Element {
  return (
    <Container className={className}>
      <Label $bold as='label' htmlFor={name}>
        {label}
      </Label>
      <StyledInput
        $hasError={!!errorMessage}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {errorMessage ? (
        <>
          <IconWrapper data-testid='inputTextErrorIcon'>
            <Warning />
          </IconWrapper>
          <Error role='alert' data-testid='inputTextErrorMessage'>
            {errorMessage}
          </Error>
        </>
      ) : null}
      {helpMessage && !errorMessage ? (
        <Helper data-testid='inputTextHelpMessage'>{helpMessage}</Helper>
      ) : null}
    </Container>
  );
}
