import { HTMLProps } from 'react';

export type InputTextProps = {
  id: string;
  name: string;
  value: string;
  type: 'text' | 'email' | 'password';
  autoComplete?: string;
  helpMessage?: string;
  errorMessage?: string;
  label?: string;
  onBlur?: HTMLProps<HTMLInputElement>['onBlur'];
  onChange?: HTMLProps<HTMLInputElement>['onChange'];
  onFocus?: HTMLProps<HTMLInputElement>['onFocus'];
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  className?: string;
};

export type StylesProps = {
  $hasError: boolean;
};
