import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, AdminLayout, AuthLayout } from '../layouts';
import { auth } from '../config/firebase.config';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Home, Profile, AdminHome, Authentication } from '../pages';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {/* client users */}
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='Profile/:uid' element={<Profile />} />
          </Route>
          {/* admin layout - admin users */}
          <Route path='/admin/*' element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
          </Route>
          {/* auth layout */}
          <Route path='/auth/*' element={<AuthLayout />}>
            <Route index element={<Authentication />} />
          </Route>
        </Routes>
      </Suspense>
      {/* enable the devtools to handle state library */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
