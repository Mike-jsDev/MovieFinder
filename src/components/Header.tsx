import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
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
`,
);

const Header: FC = () => {
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
              <Avatar
                alt='logo'
                src={logo}
                sx={{ maxWidth: 50 }}
                variant='square'
              />
            </Link>
          </Box>
          <Grid container spacing={2}>
            {routes.map((page) => (
              <Grid item key={page.key}>
                <Link to={page.path} style={{ textDecoration: 'none' }}>
                  <LinkTitle>{page.title}</LinkTitle>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
