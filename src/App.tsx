import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from '@components/Layout';
import { PrivateRoute } from '@components/PrivateRoute';
import { appRoutes } from '@constants/routes';
import { PathType, RouteKeyType } from '@interfaces/app/enums';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Home } from '@pages/Home';
import { theme } from '@theme/global-styles';

import './styles.scss';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={PathType.PathHome} element={<Layout />}>
            <Route key={RouteKeyType.RouteHome} index element={<Home />} />
            {appRoutes.map((route) => {
              if (route.private) {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<PrivateRoute isPrivate={route.private} component={route.component} />}
                  />
                );
              }
              if (route.key === RouteKeyType.RouteRegister || route.key === RouteKeyType.RouteLogin) {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<PrivateRoute isPrivate={route.private} component={route.component} />}
                  />
                );
              }

              return <Route key={route.key} path={route.path} element={route.component} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
