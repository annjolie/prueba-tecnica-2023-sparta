import { Checkmark, Subtract } from '@carbon/icons-react';
import React from 'react';
import {
  CheckContainer,
  Container,
  HiddenInput,
  HiddenLabel,
  Label
} from './styles';
import type { CheckboxProps } from './types';

export default function Checkbox({
  name,
  label,
  id = name,
  disabled,
  checked,
  onChange,
  indeterminate = false
}: CheckboxProps): JSX.Element {
  return (
    <Container>
      <HiddenInput
        type='checkbox'
        onChange={onChange}
        name={name}
        id={id}
        disabled={!!disabled}
        defaultChecked={checked}
      />
      <Label htmlFor={id}>
        <HiddenLabel>{label}</HiddenLabel>
        <CheckContainer aria-disabled={disabled}>
          {!indeterminate ? <Checkmark size={20} /> : <Subtract size={20} />}
        </CheckContainer>
      </Label>
    </Container>
  );
}
