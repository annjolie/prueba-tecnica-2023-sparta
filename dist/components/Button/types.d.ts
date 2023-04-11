import type { MouseEvent } from 'react';
export declare type ButtonProps = {
    label: string;
    className?: string;
    href?: string;
    variant?: 'primary' | 'no-bg';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export declare type $ContainerProps = {
    $variant: ButtonProps['variant'];
};
