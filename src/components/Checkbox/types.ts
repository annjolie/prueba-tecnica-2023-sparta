import { ChangeEvent, InputHTMLAttributes } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: string;
  id?: string;
  indeterminate?: boolean;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
