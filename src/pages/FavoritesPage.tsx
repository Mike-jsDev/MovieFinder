import { FC } from 'react';

import { Container, Paper, Typography } from '@mui/material';

export const FavoritesPage: FC = () => {
  return (
    <Container>
      <Paper
        sx={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant='h1'>Favorites Page</Typography>
      </Paper>
    </Container>
  );
};
