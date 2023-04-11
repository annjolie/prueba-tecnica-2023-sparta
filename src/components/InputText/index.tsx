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
  error,
  help,
  helpMessage,
  id,
  label,
  type,
  name,
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
        $hasError={!!error}
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
      />
      {error ? (
        <IconWrapper $hasError={!!error}>
          <Warning />
        </IconWrapper>
      ) : null}
      {error ? <Error role='alert'>{errorMessage}</Error> : null}
      {help && !error ? <Helper>{helpMessage}</Helper> : null}
    </Container>
  );
}
