import React, { ComponentType } from 'react';
declare const withProtected: <P extends object>(WrappedComponent: React.ComponentType<P>) => (props: P) => JSX.Element | null;
export default withProtected;
