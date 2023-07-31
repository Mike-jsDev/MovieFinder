import { FC } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

export const Loader: FC<{ openLoader: boolean }> = ({ openLoader }) => {
  return (
    <Backdrop
      open={openLoader}
      sx={{
        position: 'relative',
        color: '#fff',
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: 'calc(100vh - 130px)',
      }}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
