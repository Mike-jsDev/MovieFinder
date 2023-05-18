import { FC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <Paper
        sx={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant='h1'>Page not found.</Typography>
        <Typography variant='h3'>
          Back to <Link to='/'>Home page</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
