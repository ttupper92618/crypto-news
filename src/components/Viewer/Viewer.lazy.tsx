import React, { lazy, Suspense } from 'react';

const LazyViewer = lazy(() => import('./Viewer'));

const Viewer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewer {...props} />
  </Suspense>
);

export default Viewer;
