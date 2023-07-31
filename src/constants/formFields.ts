import { IFormAttributes } from '@interfaces/app/interfaces';

export const loginFormFields: Array<IFormAttributes> = [
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'email address',
    isFullWidth: true,
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'password',
    isFullWidth: true,
  },
];

export const loginFormInitialValues = {
  email: '',
  password: '',
};

export const registerFormFields: Array<IFormAttributes> = [
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'email address',
    isFullWidth: true,
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'password',
    isFullWidth: true,
  },
  {
    id: 'confirm',
    type: 'password',
    name: 'confirm',
    label: 'confirm password',
    isFullWidth: true,
  },
];

export const registerFormInitialValues = {
  email: '',
  password: '',
  confirm: '',
};
