import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import AdminLayout from '../layout/AdminLayout';
import { Home, Profile, AdminHome } from '../pages';

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
      </Routes>
    </Suspense>
  );
};
export default App;
