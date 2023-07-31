import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Header } from './Header';

const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <ContentBox>
        <Outlet />
      </ContentBox>
      <footer style={{ textAlign: 'center' }}>
        <h3>&copy; React Movie Finder 2023</h3>
      </footer>
    </>
  );
};
