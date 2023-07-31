import { FC, useEffect, useState } from 'react';
import { FormikProps, getIn, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { formSubmitHandler } from '@businessLogic/FormSubmit';
import { FormType } from '@interfaces/app/enums';
import { IFormAttributes, IFormValues } from '@interfaces/app/interfaces';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';

export const LoginRegisterForm: FC<{
  formType: FormType;
  formFields: IFormAttributes[];
  validationSchema: Yup.AnyObject;
  initialValues: IFormValues;
}> = ({ formType, formFields, validationSchema, initialValues }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const formik: FormikProps<IFormValues> = useFormik<IFormValues>({
    validateOnMount: true,
    initialValues: initialValues,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values, { resetForm }) =>
      formSubmitHandler(values, resetForm, formType, setIsDisabled, navigate, dispatch),
  });

  useEffect(() => {
    if (formik.isSubmitting) {
      setIsDisabled(true);
    } else if (formik.dirty && formik.isValid && formik.isValidating === false) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik]);

  const ErrorMessage = (props: string): string => {
    const error = getIn(formik.errors, props);
    const touch = getIn(formik.touched, props);

    return touch && error ? error : null;
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'custom.electricViolet' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ textTransform: 'uppercase' }}>
          {formType}
        </Typography>
        <Box id={`appForm${formType}`} component='form' onSubmit={formik.handleSubmit} sx={{ mt: 1, width: '100%' }}>
          {formFields.map((field, index) => (
            <TextField
              key={`${index}${field.id}`}
              {...formik.getFieldProps(field.name)}
              id={field.id}
              label={field.label}
              type={field.type}
              name={field.name}
              helperText={ErrorMessage(field.name)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(ErrorMessage(field.name))}
              margin='normal'
              fullWidth={field.isFullWidth}
            />
          ))}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            disabled={isDisabled}
            sx={{ mt: 3, mb: 2, bgcolor: 'custom.electricViolet', textTransform: 'capitalize' }}
          >
            {formType}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
