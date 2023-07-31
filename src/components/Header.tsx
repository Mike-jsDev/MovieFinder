import { FC, ReactElement } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { appRoutes } from '@constants/routes';
import logo from '@images/logo.svg';
import { PathType } from '@interfaces/app/enums';
import { IRootState } from '@interfaces/redux/interfaces';
import { AppBar, Avatar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setIsAuth } from '@redux/actions/userActions';

const LinkTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color:  ${theme.palette.primary.contrastText};
  text-transform: initial;
  :hover,
  :focus {
    color:  ${theme.palette.custom.electricViolet};
  }
  .active & {
    color:  ${theme.palette.custom.electricViolet};
  }
`,
);

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: IRootState) => {
    return state.userReducer.isAuth;
  });

  const auth = getAuth();
  const handleLogout = async (): Promise<void> => {
    await signOut(auth);
    dispatch(setIsAuth(false));
    navigate(PathType.PathHome);
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Container>
        <Toolbar>
          <Box sx={{ marginRight: '1rem' }}>
            <Link to={PathType.PathHome}>
              <Avatar alt='logo' src={logo} sx={{ maxWidth: 50 }} variant='square' />
            </Link>
          </Box>
          <Grid container spacing={2}>
            <Grid item key='home-route'>
              <NavLink to={PathType.PathHome} style={{ textDecoration: 'none' }}>
                <LinkTitle>Home</LinkTitle>
              </NavLink>
            </Grid>
            {appRoutes.map((page): ReactElement | null => {
              if (page.enabledToHeader && !page.private) {
                return (
                  <Grid item key={page.key}>
                    <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                      <LinkTitle>{page.title}</LinkTitle>
                    </NavLink>
                  </Grid>
                );
              }
              if (page.private && isAuth) {
                return (
                  <Grid item key={page.key}>
                    <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                      <LinkTitle>{page.title}</LinkTitle>
                    </NavLink>
                  </Grid>
                );
              }

              return null;
            })}

            <Grid item key='login-route' sx={{ ml: 'auto' }}>
              {isAuth ? (
                <LinkTitle onClick={handleLogout} sx={{ cursor: 'pointer' }}>
                  Log out
                </LinkTitle>
              ) : (
                <NavLink to={PathType.PathLogin} style={{ textDecoration: 'none' }}>
                  <LinkTitle>Login</LinkTitle>
                </NavLink>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
