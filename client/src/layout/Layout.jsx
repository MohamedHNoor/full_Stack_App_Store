import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <p>Header</p>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};
export default Layout;
