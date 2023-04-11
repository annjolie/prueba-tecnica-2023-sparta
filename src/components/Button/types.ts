import type { MouseEvent } from 'react';

export type ButtonProps = {
  label: string;
  className?: string;
  href?: string;
  variant?: 'primary' | 'no-bg';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type $ContainerProps = {
  $variant: ButtonProps['variant'];
};
