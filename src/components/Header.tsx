import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import { routes } from '../routes';
import logo from '@images/logo.svg';
import { styled } from '@mui/material/styles';

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
            <Link to='/'>
              <Avatar alt='logo' src={logo} sx={{ maxWidth: 50 }} variant='square' />
            </Link>
          </Box>
          <Grid container spacing={2}>
            <Grid item key='home-route'>
              <NavLink to='/' style={{ textDecoration: 'none' }}>
                <LinkTitle>Home</LinkTitle>
              </NavLink>
            </Grid>
            {routes.map(
              (page) =>
                page.enabledToHeader && (
                  <Grid item key={page.key}>
                    <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                      <LinkTitle>{page.title}</LinkTitle>
                    </NavLink>
                  </Grid>
                ),
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
