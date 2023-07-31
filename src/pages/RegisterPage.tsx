import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LoginRegisterForm } from '@components/LoginRegisterForm';
import { registerFormFields, registerFormInitialValues } from '@constants/formFields';
import { FormType, PathType } from '@interfaces/app/enums';
import { Container, Paper, Typography } from '@mui/material';
import { registerFormValidations } from '@validations/validationSchemas';

export const RegisterPage: FC = () => {
  return (
    <Container sx={{ margin: 'auto' }}>
      <Paper
        sx={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <LoginRegisterForm
          formType={FormType.Register}
          formFields={registerFormFields}
          initialValues={registerFormInitialValues}
          validationSchema={registerFormValidations}
        />
        <Typography variant='h5' fontWeight='700'>
          Already have an account? <Link to={PathType.PathLogin}>Sign in</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
