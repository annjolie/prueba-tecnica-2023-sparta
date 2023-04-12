import { ChangeEvent, InputHTMLAttributes, ReactComponentElement } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: ReactComponentElement<'label'> | string;
  id?: string;
  indeterminate?: boolean;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
