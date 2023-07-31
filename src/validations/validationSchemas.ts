import * as Yup from 'yup';

const EMAIL_REGEX =
  // eslint-disable-next-line max-len
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidation = Yup.string()
  .trim()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .max(20, 'Password can not be longer than 20 characters')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter');

const emailValidation = Yup.string()
  .email('Invalid email address')
  .matches(EMAIL_REGEX, 'Invalid email address')
  .required('No email provided.');

const confirmPasswordValidation = Yup.string()
  .label('confirm password')
  .required()
  .oneOf([Yup.ref('password')], 'Passwords must match');

export const loginFormValidations = {
  email: emailValidation,
  password: passwordValidation,
};

export const registerFormValidations = {
  email: emailValidation,
  password: passwordValidation,
  confirm: confirmPasswordValidation,
};
