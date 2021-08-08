import React, { lazy, Suspense } from 'react';

const LazyLoading = lazy(() => import('./Loading'));

const Loading = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLoading {...props} />
  </Suspense>
);

export default Loading;
