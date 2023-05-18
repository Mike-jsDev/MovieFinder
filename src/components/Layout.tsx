import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer style={{ textAlign: 'center' }}>
        <h3>&copy; React Movie Finder 2023</h3>
      </footer>
    </>
  );
};
