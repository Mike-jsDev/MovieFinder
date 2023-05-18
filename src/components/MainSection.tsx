import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import backgroundImg from '@images/mainSectionBg.jpg';
import { InputSearch } from './InputSearch';
import { styled } from '@mui/material/styles';

const SectionBox = styled(Box)`
  background-image: url('${backgroundImg}');
  position: relative;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 64px);
`;

const SectionOverlay = styled(Box)(
  ({ theme }) => `
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.palette.custom.gradient};
`,
);

const DisclaimerContainer = styled(Container)`
  position: relative;
  z-index: 2;
  padding-top: 4rem;
  text-align: center;
`;

export const MainSection: FC = () => {
  const title = 'Unlimited movies, TV shows and more.';
  const subtitle = 'Watch anywhere. Cancel anytime.';
  const text = 'Start typing for search';

  return (
    <SectionBox>
      <SectionOverlay />
      <DisclaimerContainer>
        <Typography component='h1' variant='h2' sx={{ fontWeight: '700' }}>
          {title}
        </Typography>
        <Typography component='h2' variant='h4' sx={{ fontWeight: '300' }}>
          {subtitle}
        </Typography>
        <Typography component='p' variant='h6' sx={{ mt: '2rem' }}>
          {text}
        </Typography>
        <InputSearch />
      </DisclaimerContainer>
    </SectionBox>
  );
};
