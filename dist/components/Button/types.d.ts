import type { MouseEvent } from 'react';
export declare type ButtonProps = {
    label: string;
    className?: string;
    href?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
