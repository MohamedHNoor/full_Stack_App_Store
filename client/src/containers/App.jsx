import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, AdminLayout, AuthLayout } from '../layouts';

import { Home, Profile, AdminHome, Authentication } from '../pages';

const App = () => {
  return (
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
  );
};
export default App;
