import { FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProgressBox = styled(Box)`
  position: relative;
  display: inline-block;
  width: max-content;
`;

const ValueBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  value: number;
}

const CircularRate: FC<Props> = ({ value }) => {
  return (
    <ProgressBox>
      <CircularProgress
        variant='determinate'
        value={Math.floor(value * 10)}
        size={50}
        sx={{ color: 'custom.electricViolet' }}
      />
      <ValueBox>
        <Typography
          variant='body1'
          component='span'
          fontWeight='700'
          sx={{ marginTop: '-5px' }}
        >
          {value}
        </Typography>
      </ValueBox>
    </ProgressBox>
  );
};

export default CircularRate;
