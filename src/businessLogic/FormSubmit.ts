import { SetStateAction } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { FormikState } from 'formik';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnyAction, Dispatch } from 'redux';

import { FormType, PathType } from '@interfaces/app/enums';
import { setIsAuth } from '@redux/actions/userActions';

export const formSubmitHandler = async (
  values: { email: string; password: string },
  resetForm: {
    (nextState?: Partial<FormikState<{ email: string; password: string }>>): void;
    (): void;
  },
  formType: FormType,
  setIsSubmitBtnDisabled: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
  navigate: NavigateFunction,
  dispatch: Dispatch<AnyAction>,
): Promise<UserCredential | void> => {
  try {
    const auth = getAuth();
    const res =
      formType === FormType.Login
        ? await signInWithEmailAndPassword(auth, values.email, values.password)
        : await createUserWithEmailAndPassword(auth, values.email, values.password);
    dispatch(setIsAuth(true));
    resetForm();
    navigate(PathType.PathHome);

    return res;
  } catch (error) {
    const { code } = JSON.parse(JSON.stringify(error));
    switch (formType) {
      case FormType.Login:
        toast.error('Wrong password or email', { autoClose: false });
        resetForm({});
        setIsSubmitBtnDisabled(true);
        break;
      case FormType.Register:
        toast.error(code.split('/')[1], { autoClose: false });
        resetForm({});
        setIsSubmitBtnDisabled(true);
        break;
      default:
        toast.error(code.split('/')[1], { autoClose: false });
        resetForm({});
        setIsSubmitBtnDisabled(true);
        break;
    }
  }
};
