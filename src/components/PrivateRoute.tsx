import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PathType } from '@interfaces/app/enums';
import { IRootState } from '@interfaces/redux/interfaces';

export const PrivateRoute = ({
  component: RenderComponent,
  isPrivate = false,
}: {
  component: ReactElement;
  isPrivate?: boolean;
}): ReactElement | null => {
  const isAuth = useSelector((state: IRootState) => {
    return state.userReducer.isAuth;
  });

  if (isPrivate && isAuth) {
    return RenderComponent;
  }
  if (!isPrivate && !isAuth) {
    return RenderComponent;
  }

  return <Navigate to={PathType.PathHome} />;
};
