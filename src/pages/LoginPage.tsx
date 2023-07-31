import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LoginRegisterForm } from '@components/LoginRegisterForm';
import { loginFormFields, loginFormInitialValues } from '@constants/formFields';
import { FormType, PathType } from '@interfaces/app/enums';
import { Container, Paper, Typography } from '@mui/material';
import { loginFormValidations } from '@validations/validationSchemas';

export const LoginPage: FC = () => {
  return (
    <Container sx={{ margin: 'auto' }}>
      <Paper
        sx={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <LoginRegisterForm
          formType={FormType.Login}
          formFields={loginFormFields}
          validationSchema={loginFormValidations}
          initialValues={loginFormInitialValues}
        />
        <Typography variant='h5' fontWeight='700'>
          Don't have an account yet? <Link to={PathType.PathRegister}>Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
