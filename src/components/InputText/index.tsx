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
  autoComplete,
  className,
  helpMessage,
  id,
  label,
  type,
  name,
  value,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  readOnly,
  required,
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
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        type={type}
        autoComplete={autoComplete}
        readOnly={readOnly}
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
