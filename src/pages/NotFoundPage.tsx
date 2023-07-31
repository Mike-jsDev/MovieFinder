import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PathType } from '@interfaces/app/enums';
import { Container, Paper, Typography } from '@mui/material';

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
          Back to <Link to={PathType.PathHome}>Home page</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
