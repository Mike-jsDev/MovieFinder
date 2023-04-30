import { FC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
// ToDo: Mocked page

const ErrorPage: FC = () => {
  return (
    <Container>
      <Paper>
        <Typography variant='h1'>404</Typography>
      </Paper>
    </Container>
  );
};

export default ErrorPage;
