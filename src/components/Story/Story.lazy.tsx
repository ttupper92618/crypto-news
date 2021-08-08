import React, { lazy, Suspense } from 'react';

const LazyStory = lazy(() => import('./Story'));

const Story = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStory {...props} />
  </Suspense>
);

export default Story;
