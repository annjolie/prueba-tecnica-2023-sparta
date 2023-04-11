import { HTMLProps } from 'react';

export type InputTextProps = {
  id: string;
  name: string;
  value: string;
  type: 'text' | 'email' | 'password';
  helpMessage?: string;
  errorMessage?: string;
  label?: string;
  onChange?: HTMLProps<HTMLInputElement>['onChange'];
  placeholder?: string;
  className?: string;
};

export type StylesProps = {
  $hasError: boolean;
};
