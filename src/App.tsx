import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes as appRoutes } from './routes';
import { Layout } from '@components/Layout';
import { NotFoundPage } from '@pages/NotFoundPage';
import { Home } from '@pages/Home';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@theme/global-styles';
import './styles.scss';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route key='home-route' index element={<Home />} />
            {appRoutes.map((route) => (
              <Route key={route.key} path={route.path} element={<route.component />} />
            ))}
            <Route key='notFound-page-route' path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
