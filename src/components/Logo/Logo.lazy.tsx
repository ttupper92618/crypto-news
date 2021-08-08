import React, { lazy, Suspense } from 'react';

const LazyLogo = lazy(() => import('./Logo'));

const Logo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogo {...props} />
  </Suspense>
);

export default Logo;
