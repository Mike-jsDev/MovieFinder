import { FC } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionBox = styled(Box)`
  background-attachment: fixed;
  position: relative;
  background-position: center 64px;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(80vh - 64px);
  z-index: -1;
`;

const SectionOverlay = styled(Box)(
  ({ theme }) => `
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.palette.custom.gradientDark};
`,
);

export const Banner: FC<{ backdropPath: string }> = ({ backdropPath }) => {
  return (
    <SectionBox
      sx={{
        backgroundImage: `url('${process.env.POSTER_URL}${backdropPath}')`,
      }}
    >
      <SectionOverlay />
    </SectionBox>
  );
};
