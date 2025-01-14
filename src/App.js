import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
// import { useConfigQuery } from 'api/feeds';
import Loader from 'components/ui/loader';

const App = () => {
  // Subscribes the config data upfront and caches the result
  // const { isSuccess } = useConfigQuery();

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
