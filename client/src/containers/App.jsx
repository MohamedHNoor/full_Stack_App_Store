import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, AdminLayout, AuthLayout } from '../layouts';
import { auth } from '../config/firebase.config';

import { Home, Profile, AdminHome, Authentication } from '../pages';

const App = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userCred) => {
      if (userCred) {
        try {
          const token = await userCred.getIdToken();
          console.log(token);
        } catch (error) {
          console.error('Error fetching ID token:', error);
        }
      }
    });
    return () => unsubscribe();
  }, [auth]);

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
