import React, { lazy, Suspense } from 'react';

const LazyOverlay = lazy(() => import('./Overlay'));

const Overlay = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOverlay {...props} />
  </Suspense>
);

export default Overlay;
